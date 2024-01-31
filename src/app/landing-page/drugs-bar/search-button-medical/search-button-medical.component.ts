import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-button-medical',
  templateUrl: './search-button-medical.component.html',
  styleUrls: [
    './search-button-medical.component.css',
  '../../../shared/styles/shared-styles.css' 
]
})
export class SearchButtonMedicalComponent {
  @Input() isSearchEnabled: boolean = false;
}
