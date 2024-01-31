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
    this.searchInputService.currentDrugTargetTerm.subscribe(term => { // Voeg deze regel toe
      this.drugTargetTerm = term; // En deze regel
    });
  }

  updateItems() {
    if (this.searchTerm) {
      this.subscriptions.add(
        this.drugsByIndicationService.getDrugsByDisease(this.searchTerm).subscribe(drugs => {
          this.items = drugs.map(drug => ({
            veld1: drug.unapproved,
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