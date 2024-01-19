import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { DrugsService } from '../../../services/drug.service';

interface DrugResponse {
  main_drug: string;
  info?: string;
}

@Component({
  selector: 'app-search-drug',
  templateUrl: './search-drug.component.html',
  styleUrls: [
    './search-drug.component.css',
    '../../../shared/styles/shared-styles.css' 
  ]
})
export class SearchDrugComponent implements OnInit {
  drugs$!: Observable<DrugResponse[]>;
  filteredDrugs$!: Observable<DrugResponse[]>;
  searchInput: string = '';
  valid: boolean = true;
  showSuggestions: boolean = true;
  showSidePanelDrugs: boolean = false;
  private searchTerms = new Subject<string>();

  constructor(private drugsService: DrugsService) {}

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.fetchSuggestions(term)),
    ).subscribe(drugs => {
      this.filteredDrugs$ = of(drugs);
      this.showSuggestions = drugs.length > 0;
    });
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchInput = target.value;
    this.searchTerms.next(target.value);
    this.valid = !!target.value;
    this.showSuggestions = !!target.value;
  }

  fetchSuggestions(query: string): Observable<DrugResponse[]> {
    if (!query.trim()) {
      return of([]);
    }
    return this.drugsService.getDrugs().pipe(
      switchMap((drugs: DrugResponse[]) => {
        const filteredDrugs = drugs.filter(drug => drug.main_drug.toLowerCase().includes(query.toLowerCase()));
        return of(filteredDrugs);
      }),
      catchError(error => {
        console.error('Er is iets misgegaan bij het ophalen van de suggesties:', error);
        return of([]);
      })
    );
  }

  handleSelect(drug: DrugResponse): void {
    this.searchInput = drug.main_drug;
    this.valid = true;
    this.showSuggestions = false;
  }

  handleInfoClick(): void {
    this.showSidePanelDrugs = !this.showSidePanelDrugs;
  }

  highlightSearchText(text: string): string {
    if (!this.searchInput) {
      return text;
    }
    const regex = new RegExp(`(${this.searchInput})`, 'gi');
    return text.replace(regex, `<strong>$1</strong>`);
  }
}