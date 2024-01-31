import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchInputService } from '../../services/search-input.service'; // Pas dit pad aan indien nodig
import { DrugsByIndicationService } from '../../services/drugsbyindication.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  searchTerm: string = '';
  drugTargetTerm: string = ''; 
  items: any[] = [];

  constructor(private router: Router, private searchInputService: SearchInputService, private drugsByIndicationService: DrugsByIndicationService) {}

  ngOnInit() {
    this.searchInputService.currentSearchTerm.subscribe(term => {
      this.searchTerm = term;
      this.updateItems();
    });
    this.searchInputService.currentDrugTargetTerm.subscribe(term => { // Voeg deze regel toe
      this.drugTargetTerm = term; // En deze regel
    });
  }

  updateItems() {
    if (this.searchTerm) {
      const drugs = this.drugsByIndicationService.getDrugsByDisease(this.searchTerm);
      this.items = drugs.map(drug => ({
        veld1: drug.unapproved,
        // ... vul de rest van de velden in zoals nodig ...
      }));
    } else {
      this.items = []; // Of de standaardwaarde van items als er geen zoekterm is
    }
  }


  redirectToDrugPage(drugName: string) {
    this.router.navigate(['/drugpage', drugName]);
  }
}