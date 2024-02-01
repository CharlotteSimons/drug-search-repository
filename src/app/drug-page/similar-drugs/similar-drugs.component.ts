import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-similar-drugs',
  templateUrl: './similar-drugs.component.html',
  styleUrl: './similar-drugs.component.css'
})
export class SimilarDrugsComponent {
  private router = inject(Router)

  navigateToDrugName(path: string){
    this.router.navigate([path])
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
