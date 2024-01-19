import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-panel-medical-condition',
  templateUrl: './side-panel-medical-condition.component.html',
  styleUrls: ['./side-panel-medical-condition.component.css']
})
export class SidePanelMedicalConditionComponent {
  @Input() show: boolean = false;
}

