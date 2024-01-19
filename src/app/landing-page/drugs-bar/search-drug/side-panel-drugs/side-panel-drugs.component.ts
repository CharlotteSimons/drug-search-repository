import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-panel-drugs',
  templateUrl: './side-panel-drugs.component.html',
  styleUrls: ['./side-panel-drugs.component.css']
})
export class SidePanelDrugsComponent {
  @Input() show: boolean = false;
  // Voeg eventuele andere inputs toe die nodig zijn voor het paneel
}