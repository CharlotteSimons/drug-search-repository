import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent {
  items = [
    { veld1: 'Toripalimab injection', veld2: 'PD-1 receptor, EGFR-mutation.', veld3: 'Phase 3', veld4: '40 patients were enrolled with an overall ORR of 50.0% and disease-control rate (DCR) of 87.5%. The median progression free survival (PFS) and overall survival were 7.0 and 23.5 months, respectively.', veld5: 'The most common (≥20%) TRAE included 33 (82.5%) leukopenia, 28 (70.0%) neutropenia, 27 (67.5%) anemia, 21 (52.5%) elevated AST, 20 (50.0%) elevated ALT, 19 (47.5%) nausea, 19 (47.5%) thrombocytopenia, 15 (37.5%) decreased appetite, 11 (27.5%) constipation, and 10 (25.0%) asthenia.', veld6:'2 clinical studies recruiting' },
    { veld1: 'Pembrolizumab 25 MG/ML', veld2: 'PD-1 receptor, EGFR-mutation.', veld3: 'Phase 3', veld4: '40 patients were enrolled with an overall ORR of 50.0% and disease-control rate (DCR) of 87.5%. The median progression free survival (PFS) and overall survival were 7.0 and 23.5 months, respectively.', veld5: 'The most common (≥20%) TRAE included 33 (82.5%) leukopenia, 28 (70.0%) neutropenia, 27 (67.5%) anemia, 21 (52.5%) elevated AST, 20 (50.0%) elevated ALT, 19 (47.5%) nausea, 19 (47.5%) thrombocytopenia, 15 (37.5%) decreased appetite, 11 (27.5%) constipation, and 10 (25.0%) asthenia.', veld6:'3 clinical studies recruiting' },
    { veld1: 'Camrelizumab', veld2: 'PD-1 receptor, EGFR-mutation.', veld3: 'Phase 3', veld4: '40 patients were enrolled with an overall ORR of 50.0% and disease-control rate (DCR) of 87.5%. The median progression free survival (PFS) and overall survival were 7.0 and 23.5 months, respectively.', veld5: 'The most common (≥20%) TRAE included 33 (82.5%) leukopenia, 28 (70.0%) neutropenia, 27 (67.5%) anemia, 21 (52.5%) elevated AST, 20 (50.0%) elevated ALT, 19 (47.5%) nausea, 19 (47.5%) thrombocytopenia, 15 (37.5%) decreased appetite, 11 (27.5%) constipation, and 10 (25.0%) asthenia.', veld6:'no clinical studies, EAP possible' },
    { veld1: 'Nivolumab', veld2: 'PD-1 receptor, EGFR-mutation.', veld3: 'Phase 3', veld4: '40 patients were enrolled with an overall ORR of 50.0% and disease-control rate (DCR) of 87.5%. The median progression free survival (PFS) and overall survival were 7.0 and 23.5 months, respectively.', veld5: 'The most common (≥20%) TRAE included 33 (82.5%) leukopenia, 28 (70.0%) neutropenia, 27 (67.5%) anemia, 21 (52.5%) elevated AST, 20 (50.0%) elevated ALT, 19 (47.5%) nausea, 19 (47.5%) thrombocytopenia, 15 (37.5%) decreased appetite, 11 (27.5%) constipation, and 10 (25.0%) asthenia.', veld6:'1 clinical study recruiting' },
  ];

  constructor(private router: Router) {}

  redirectToDrugPage(drugName: string) {
    this.router.navigate(['/drugpage', drugName]);
  }
}
