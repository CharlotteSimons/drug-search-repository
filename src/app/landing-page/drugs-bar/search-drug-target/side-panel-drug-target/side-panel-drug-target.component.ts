import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-panel-drug-target',
  templateUrl: './side-panel-drug-target.component.html',
  styleUrl: './side-panel-drug-target.component.css'
})
export class SidePanelDrugTargetComponent {
  @Input() show: boolean = false;
}

