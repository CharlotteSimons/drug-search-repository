import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-button-drugs',
  templateUrl: './search-button-drugs.component.html',
  styleUrls: [
    './search-button-drugs.component.css',
    '../../../shared/styles/shared-styles.css' 
  ]
})
export class SearchButtonDrugsComponent {
  @Input() isValidSearch: boolean = false; // Voeg deze regel toe
}
