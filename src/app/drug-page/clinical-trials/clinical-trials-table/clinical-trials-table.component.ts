import { Component } from '@angular/core';

@Component({
  selector: 'app-clinical-trials-table',
  templateUrl: './clinical-trials-table.component.html',
  styleUrl: './clinical-trials-table.component.css'
})
export class ClinicalTrialsTableComponent {
  items = [
    { veld1: 'NCT04280822', veld2: 'Phase 3', veld3: 'Recruiting', veld4: 'A Phase III, Randomized Controlled Study of Neo-adjuvant Toripalimab (JS001) in Combination With Chemotherapy Versus Neo-adjuvant Chemotherapy for Resectable Esophageal Squamous Cell Carcinoma', veld5: 'Neoadjuvant immunochemotherapy' },
    { veld1: 'NCT04280822', veld2: 'Phase 3', veld3: 'Recruiting', veld4: 'A Phase III, Randomized Controlled Study of Neo-adjuvant Toripalimab (JS001) in Combination With Chemotherapy Versus Neo-adjuvant Chemotherapy for Resectable Esophageal Squamous Cell Carcinoma', veld5: 'Neoadjuvant immunochemotherapy' },
    { veld1: 'NCT04280822', veld2: 'Phase 3', veld3: 'Recruiting', veld4: 'A Phase III, Randomized Controlled Study of Neo-adjuvant Toripalimab (JS001) in Combination With Chemotherapy Versus Neo-adjuvant Chemotherapy for Resectable Esophageal Squamous Cell Carcinoma', veld5: 'Neoadjuvant immunochemotherapy' },
  ];

}
