import { Component, OnInit } from '@angular/core';
import { SearchInputService } from '../../../services/search-input.service';
import { DrugsByIndicationService } from '../../../services/drugsbyindication.service';

@Component({
  selector: 'app-search-medical-condition',
  templateUrl: './search-medical-condition.component.html',
  styleUrls: [
    './search-medical-condition.component.css',
    '../../../shared/styles/shared-styles.css'
  ]
})
export class SearchMedicalConditionComponent implements OnInit {
  valid: boolean = true;
  showSuggestions: boolean = true;
  showSidePanelMedicalCondition: boolean = false;
  filteredDiseases: string[] = [];
  searchInput: string = '';
  searchTerm: string = '';

  constructor(
    private searchInputService: SearchInputService,
    private drugsByIndicationService: DrugsByIndicationService
  ) {}

  ngOnInit(): void {
    this.filteredDiseases = this.drugsByIndicationService.getDiseases();
  }

  handleInfoClick(): void {
    this.showSidePanelMedicalCondition = !this.showSidePanelMedicalCondition;
  }

  onSearchTermChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.searchTerm = inputElement.value;
      this.showSuggestions = true;
      if (this.searchTerm.length > 0) {
        this.filteredDiseases = this.drugsByIndicationService.getDiseases(this.searchTerm);
      } else {
        this.filteredDiseases = [];
      }
    }
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
