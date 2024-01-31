import { Component } from '@angular/core';

@Component({
  selector: 'app-drugs-bar',
  templateUrl: './drugs-bar.component.html',
  styleUrl: './drugs-bar.component.css'
})
export class DrugsBarComponent {
  searchValid: boolean = false; // Voeg deze property toe om de zoekgeldigheid bij te houden
  searchDrugInput: string = '';
  searchMedicalInput: string = '';

  isSearchEnabled(): boolean {
    return this.searchDrugInput.trim().length > 0 || this.searchMedicalInput.trim().length > 0;
  }

  onSearchDrugInputChange(value: string): void {
    this.searchDrugInput = value;
    this.searchValid = this.isSearchEnabled();
  }
  
  onSearchMedicalInputChange(value: string): void {
    this.searchMedicalInput = value;
    this.searchValid = this.isSearchEnabled();
  }
}