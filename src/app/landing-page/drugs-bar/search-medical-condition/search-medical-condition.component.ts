import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { SearchInputService } from '../../../services/search-input.service';
import { DrugsByIndicationService } from '../../../services/drugsbyindication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-medical-condition',
  templateUrl: './search-medical-condition.component.html',
  styleUrls: [
    './search-medical-condition.component.css',
    '../../../shared/styles/shared-styles.css'
  ]
})
export class SearchMedicalConditionComponent implements OnInit, OnDestroy {
  valid: boolean = true;
  showSuggestions: boolean = false; 
  showSidePanelMedicalCondition: boolean = false;
  filteredDiseases: string[] = [];
  searchInput: string = '';
  searchTerm: string = '';
  private subscriptions = new Subscription();

  @Output() searchTermChange = new EventEmitter<string>(); // Voeg dit toe

  constructor(
    private searchInputService: SearchInputService,
    private drugsByIndicationService: DrugsByIndicationService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.drugsByIndicationService.getDiseases().subscribe((diseases: string[]) => {
        this.filteredDiseases = diseases;
      })
    );
  }

  handleInfoClick(): void {
    this.showSidePanelMedicalCondition = !this.showSidePanelMedicalCondition;
  }

  onSearchTermChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.searchTerm = inputElement.value;
      this.showSuggestions = this.searchTerm.length > 0;
      this.searchTermChange.emit(this.searchTerm); // Stuur het event uit wanneer de zoekterm verandert

      if (this.searchTerm.length > 0) {
        this.subscriptions.add(
          this.drugsByIndicationService.getDiseases(this.searchTerm).subscribe(diseases => {
            this.filteredDiseases = diseases;
          })
        );
      } else {
        this.filteredDiseases = [];
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onDiseaseSelect(disease: string): void {
    this.searchTerm = disease;
    this.showSuggestions = false;
    this.searchInput = disease;
    this.filteredDiseases = [];
    this.searchInputService.changeSearchTerm(disease); 
  }

  highlightMatch(disease: string): string {
    if (!this.searchTerm) {
      return disease;
    }
    const regex = new RegExp(this.searchTerm, 'gi');
    return disease.replace(regex, (match) => `<strong>${match}</strong>`);
  }
}