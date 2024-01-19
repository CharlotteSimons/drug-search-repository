import { Component } from '@angular/core';
import { SearchInputService } from '../../../services/search-input.service'; // Pas dit pad aan indien nodig

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

  constructor(private searchInputService: SearchInputService) {}

  handleInfoClick(): void {
    this.showSidePanelMedicalCondition = !this.showSidePanelMedicalCondition;
  }

  onSearchTermChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.value) {
      this.searchInputService.changeSearchTerm(inputElement.value);
    }
  }
}
