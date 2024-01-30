import { Component, OnInit } from '@angular/core';
import { SearchInputService } from '../../../services/search-input.service'; // Pas dit pad aan indien nodig
import { DrugsByIndicationService } from '../../../services/drugsbyindication.service';

@Component({
  selector: 'app-search-medical-condition',
  templateUrl: './search-medical-condition.component.html',
  styleUrls: [
    './search-medical-condition.component.css',
    '../../../shared/styles/shared-styles.css' // Zorg dat dit pad correct is
  ]
})
export class SearchMedicalConditionComponent {
  valid: boolean = true;
  showSuggestions: boolean = true;
  showSidePanelMedicalCondition: boolean = false;
  filteredDiseases: string[] = [];

  constructor(
    private searchInputService: SearchInputService,
    private drugsByIndicationService: DrugsByIndicationService
    ) {}

    ngOnInit(): void {
      // Optioneel: Laad alle ziektes wanneer het component wordt geïnitialiseerd
      this.filteredDiseases = this.drugsByIndicationService.getDiseases();
    }

  handleInfoClick(): void {
    this.showSidePanelMedicalCondition = !this.showSidePanelMedicalCondition;
  }

  onSearchTermChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.filteredDiseases = this.drugsByIndicationService.getDiseases(inputElement.value);
    }
  }
}
