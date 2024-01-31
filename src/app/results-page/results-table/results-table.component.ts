import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchInputService } from '../../services/search-input.service'; // Pas dit pad aan indien nodig
import { DrugsByIndicationService } from '../../services/drugsbyindication.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  searchTerm: string = '';
  drugTargetTerm: string = ''; 
  items: any[] = [];
  private subscriptions = new Subscription();

  constructor(
    private router: Router, 
    private searchInputService: SearchInputService, 
    private drugsByIndicationService: DrugsByIndicationService
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.searchInputService.currentSearchTerm.subscribe(term => {
        this.searchTerm = term;
        this.updateItems();
      })
    );
    this.subscriptions.add( // Zorg ervoor dat je deze subscription ook toevoegt
      this.searchInputService.currentDrugTargetTerm.subscribe(term => {
        this.drugTargetTerm = term;
        this.updateItems(); // Zorg ervoor dat de items worden bijgewerkt wanneer de drugTargetTerm verandert
      })
    );
  }

  updateItems() {
    if (this.searchTerm) {
      this.subscriptions.add(
        this.drugsByIndicationService.getDrugsByDisease(this.searchTerm).subscribe(drugs => {
          this.items = drugs.map(drug => ({
            veld1: drug.unapproved,
            veld2: 'PD-1 receptor, EGFR-mutation',
            veld3: 'Phase 1',
            veld4: '40 patients were enrolled with an overall ORR of 50.0% and disease-control rate (DCR) of 87.5%. The median progression free survival (PFS) and overall survival were 7.0 and 23.5 months, respectively.', 
            veld5: 'The most common (≥20%) TRAE included 33 (82.5%) leukopenia, 28 (70.0%) neutropenia, 27 (67.5%) anemia, 21 (52.5%) elevated AST, 20 (50.0%) elevated ALT, 19 (47.5%) nausea, 19 (47.5%) thrombocytopenia, 15 (37.5%) decreased appetite, 11 (27.5%) constipation, and 10 (25.0%) asthenia.', 
            veld6: '1 clinical study recruiting' 
          }));
        })
      );
    } else {
      this.items = []; // Of de standaardwaarde van items als er geen zoekterm is
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


  redirectToDrugPage(drugName: string) {
    this.router.navigate(['/drugpage', drugName]);
  }
}