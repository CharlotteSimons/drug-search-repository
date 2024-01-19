import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { DrugsService } from '../../../services/drug.service';
import { SearchInputService } from '../../../services/search-input.service';

export interface DrugTarget {
  target_name: string;
}

@Component({
  selector: 'app-search-drug-target',
  templateUrl: './search-drug-target.component.html',
  styleUrls: [
    './search-drug-target.component.css',
    '../../../shared/styles/shared-styles.css' 
  ]
})
export class SearchDrugTargetComponent implements OnInit {
  targets$!: Observable<DrugTarget[]>; 
  filteredTargets$!: Observable<DrugTarget[]>;
  searchInput: string = '';
  valid: boolean = true;
  showSuggestions: boolean = true;
  showSidePanelDrugs: boolean = false;
  private searchTerms = new Subject<string>();

  constructor(
    private drugsService: DrugsService,
    private searchInputService: SearchInputService // Injecteer de service
  ) {}

  ngOnInit() {
    this.targets$ = this.drugsService.getDrugTargets();
    this.filteredTargets$ = this.targets$;

    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.fetchSuggestions(term)),
    ).subscribe(targets => {
      this.filteredTargets$ = of(targets);
      this.showSuggestions = targets.length > 0;
    });
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchInput = target.value;
    this.searchTerms.next(target.value);
    this.showSuggestions = !!target.value;
    this.searchInputService.changeDrugTargetTerm(target.value); // Update de zoekterm in de service
  }

  fetchSuggestions(query: string): Observable<DrugTarget[]> {
    if (!query.trim()) {
      return of([]);
    }
    return this.drugsService.getDrugTargets().pipe(
      switchMap((targets: DrugTarget[]) => {
        const filteredTargets = targets.filter(target => target.target_name.toLowerCase().startsWith(query.toLowerCase()));
        return of(filteredTargets);
      }),
      catchError(error => {
        console.error('Er is iets misgegaan bij het ophalen van de suggesties:', error);
        return of([]); // Zorg ervoor dat je een lege array teruggeeft om de Observable keten niet te onderbreken
      })
    );
  }

  handleSelect(target: DrugTarget): void {
    this.searchInput = target.target_name;
    this.showSuggestions = false;
    this.searchInputService.changeDrugTargetTerm(target.target_name); // Update de zoekterm in de service
  }

  handleInfoClick(): void {
    this.showSidePanelDrugs = !this.showSidePanelDrugs;
  }
}
