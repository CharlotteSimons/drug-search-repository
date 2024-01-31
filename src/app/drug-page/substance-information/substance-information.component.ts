import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-substance-information',
  templateUrl: './substance-information.component.html',
  styleUrls: ['./substance-information.component.css']
})
export class SubstanceInformationComponent implements OnInit {
  drugName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.drugName = params['drugName'];
    });
  }
}