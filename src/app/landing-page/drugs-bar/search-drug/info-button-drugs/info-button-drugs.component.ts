import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-button-drugs',
  templateUrl: './info-button-drugs.component.html',
  styleUrls: ['./info-button-drugs.component.css']
})

export class InfoButtonDrugsComponent {
  @Output() infoClick = new EventEmitter<void>();

  toggleInfoPanel(): void {
    // Hier kun je logica toevoegen om een informatiepaneel te tonen
    // Voor nu sturen we gewoon een event naar buiten
    this.infoClick.emit();
  }
}