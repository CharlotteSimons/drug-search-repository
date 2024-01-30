import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchInputService } from '../../services/search-input.service'; // Pas dit pad aan indien nodig

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  searchTerm: string = '';
  drugTargetTerm: string = ''; 
  items = [
    { veld1: 'Toripalimab injection', drug:'drug', veld2: 'PD-1 receptor, EGFR-mutation.', veld3: 'Phase 3', veld4: '40 patients were enrolled with an overall ORR of 50.0% and disease-control rate (DCR) of 87.5%. The median progression free survival (PFS) and overall survival were 7.0 and 23.5 months, respectively.', veld5: 'The most common (≥20%) TRAE included 33 (82.5%) leukopenia, 28 (70.0%) neutropenia, 27 (67.5%) anemia, 21 (52.5%) elevated AST, 20 (50.0%) elevated ALT, 19 (47.5%) nausea, 19 (47.5%) thrombocytopenia, 15 (37.5%) decreased appetite, 11 (27.5%) constipation, and 10 (25.0%) asthenia.', veld6:'2 clinical studies recruiting' },
    { veld1: 'Pembrolizumab 25 MG/ML', drug:'drug', veld2: 'PD-1 receptor, EGFR-mutation.', veld3: 'Phase 3', veld4: '40 patients were enrolled with an overall ORR of 50.0% and disease-control rate (DCR) of 87.5%. The median progression free survival (PFS) and overall survival were 7.0 and 23.5 months, respectively.', veld5: 'The most common (≥20%) TRAE included 33 (82.5%) leukopenia, 28 (70.0%) neutropenia, 27 (67.5%) anemia, 21 (52.5%) elevated AST, 20 (50.0%) elevated ALT, 19 (47.5%) nausea, 19 (47.5%) thrombocytopenia, 15 (37.5%) decreased appetite, 11 (27.5%) constipation, and 10 (25.0%) asthenia.', veld6:'3 clinical studies recruiting' },
    { veld1: 'Camrelizumab', drug:'drug', veld2: 'PD-1 receptor, EGFR-mutation.', veld3: 'Phase 3', veld4: '40 patients were enrolled with an overall ORR of 50.0% and disease-control rate (DCR) of 87.5%. The median progression free survival (PFS) and overall survival were 7.0 and 23.5 months, respectively.', veld5: 'The most common (≥20%) TRAE included 33 (82.5%) leukopenia, 28 (70.0%) neutropenia, 27 (67.5%) anemia, 21 (52.5%) elevated AST, 20 (50.0%) elevated ALT, 19 (47.5%) nausea, 19 (47.5%) thrombocytopenia, 15 (37.5%) decreased appetite, 11 (27.5%) constipation, and 10 (25.0%) asthenia.', veld6:'no clinical studies, EAP possible' },
    { veld1: 'Nivolumab', drug:'drug', veld2: 'PD-1 receptor, EGFR-mutation.', veld3: 'Phase 3', veld4: '40 patients were enrolled with an overall ORR of 50.0% and disease-control rate (DCR) of 87.5%. The median progression free survival (PFS) and overall survival were 7.0 and 23.5 months, respectively.', veld5: 'The most common (≥20%) TRAE included 33 (82.5%) leukopenia, 28 (70.0%) neutropenia, 27 (67.5%) anemia, 21 (52.5%) elevated AST, 20 (50.0%) elevated ALT, 19 (47.5%) nausea, 19 (47.5%) thrombocytopenia, 15 (37.5%) decreased appetite, 11 (27.5%) constipation, and 10 (25.0%) asthenia.', veld6:'1 clinical study recruiting' },
  ];

  constructor(private router: Router, private searchInputService: SearchInputService) {}

  ngOnInit() {
    this.searchInputService.currentSearchTerm.subscribe(term => {
      this.searchTerm = term;
      // this.items should receive the filtered data from the file
      // filter it so it only shows data that has your term as medical condition
    });
    this.searchInputService.currentDrugTargetTerm.subscribe(term => { // Voeg deze regel toe
      this.drugTargetTerm = term; // En deze regel
    });
  }

  redirectToDrugPage(drugName: string) {
    this.router.navigate(['/drugpage', drugName]);
  }
}