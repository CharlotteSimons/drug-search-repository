import { Component, OnInit } from '@angular/core';
import { SearchInputService } from '../../services/search-input.service';

@Component({
  selector: 'app-substance-information',
  templateUrl: './substance-information.component.html',
  styleUrls: ['./substance-information.component.css']
})
export class SubstanceInformationComponent implements OnInit {
  drugName: string = '';

  constructor(private searchInputService: SearchInputService) {}

  ngOnInit() {
    this.searchInputService.currentSearchTerm.subscribe(name => {
      this.drugName = name;
    });
  }
}
