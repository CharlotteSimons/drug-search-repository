import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-to-previous-page',
  templateUrl: './back-to-previous-page.component.html',
  styleUrl: './back-to-previous-page.component.css'
})
export class BackToPreviousPageComponent {
  constructor(private router: Router) {} // Injecteer de Router in de constructor

  navigateHome() {
    this.router.navigate(['/']); // Navigeer naar de root route (landing-page)
  }
}


