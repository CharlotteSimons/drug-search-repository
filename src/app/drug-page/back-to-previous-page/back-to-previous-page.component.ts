import { Component } from '@angular/core';
import { Location } from '@angular/common'; // Importeer Location

@Component({
  selector: 'app-back-to-previous-page',
  templateUrl: './back-to-previous-page.component.html',
  styleUrls: ['./back-to-previous-page.component.css'] // Correct de typo in 'styleUrls'
})
export class BackToPreviousPageComponent {
  constructor(private location: Location) {} // Injecteer de Location in de constructor

  navigateBack() {
    this.location.back(); // Gebruik de back functie van Location om terug te gaan
  }
}

