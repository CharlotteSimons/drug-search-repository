import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-button-medical-condition',
  templateUrl: './info-button-medical-condition.component.html',
  styleUrl: './info-button-medical-condition.component.css'
})
export class InfoButtonMedicalConditionComponent {
  @Output() infoClick = new EventEmitter<void>();

  toggleInfoPanel(): void {
    // Hier kun je logica toevoegen om een informatiepaneel te tonen
    // Voor nu sturen we gewoon een event naar buiten
    this.infoClick.emit();
  }
}
