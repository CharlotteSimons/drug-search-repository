import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchInputService } from '../../services/search-input.service';

@Component({
  selector: 'app-substance-information',
  templateUrl: './substance-information.component.html',
  styleUrls: ['./substance-information.component.css']
})
export class SubstanceInformationComponent implements OnInit {
  drugName: string = '';

  constructor(
    private route: ActivatedRoute,
    private searchInputService: SearchInputService) {}

    ngOnInit() {
      // Abonneer eerst op de route parameters
      this.route.params.subscribe(params => {
        if (params['drugName']) {
          // Als er een 'drugName' parameter is, gebruik deze
          this.drugName = params['drugName'];
        } else {
          // Als er geen 'drugName' parameter is, gebruik dan de waarde van de SearchInputService
          this.searchInputService.currentSearchTerm.subscribe(term => {
            this.drugName = term;
          });
        }
      });
    }
}