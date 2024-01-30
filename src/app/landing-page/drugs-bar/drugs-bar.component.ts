import { Component } from '@angular/core';

@Component({
  selector: 'app-drugs-bar',
  templateUrl: './drugs-bar.component.html',
  styleUrl: './drugs-bar.component.css'
})
export class DrugsBarComponent {
  searchValid: boolean = false; // Voeg deze property toe om de zoekgeldigheid bij te houden
}