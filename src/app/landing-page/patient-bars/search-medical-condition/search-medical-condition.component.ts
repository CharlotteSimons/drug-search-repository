import { Component } from '@angular/core';

@Component({
  selector: 'app-search-medical-condition',
  templateUrl: './search-medical-condition.component.html',
  styleUrls: [ // Dit moet 'styleUrls' zijn, niet 'styleUrl'
    './search-medical-condition.component.css',
    '../../../shared/styles/shared-styles.css' // Zorg dat dit pad correct is
  ]
})
export class SearchMedicalConditionComponent {
  valid: boolean = true;
  showSuggestions: boolean = true;
  showSidePanelMedicalCondition: boolean = false;

  handleInfoClick(): void {
    this.showSidePanelMedicalCondition = !this.showSidePanelMedicalCondition;
  }
}
