import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-button-drug-target',
  templateUrl: './info-button-drug-target.component.html',
  styleUrl: './info-button-drug-target.component.css'
})
export class InfoButtonDrugTargetComponent {
  @Output() infoClick = new EventEmitter<void>();

  toggleInfoPanel(): void {
    // Hier kun je logica toevoegen om een informatiepaneel te tonen
    // Voor nu sturen we gewoon een event naar buiten
    this.infoClick.emit();
  }
}
