import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importeer de Router service

@Component({
  selector: 'app-start-new-search',
  templateUrl: './start-new-search.component.html',
  styleUrls: ['./start-new-search.component.css'] // Let op: 'styleUrls' moet een array zijn
})
export class StartNewSearchComponent {
  constructor(private router: Router) {} // Injecteer de Router in de constructor

  navigateHome() {
    this.router.navigate(['/']); // Navigeer naar de root route (landing-page)
  }
}