import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchInputService {
  private searchTermSource = new BehaviorSubject<string>('');
  private drugTargetTermSource = new BehaviorSubject<string>('');
  private medicalConditionTermSource = new BehaviorSubject<string>(''); // Nieuwe BehaviorSubject voor medische aandoening

  currentSearchTerm = this.searchTermSource.asObservable();
  currentDrugTargetTerm = this.drugTargetTermSource.asObservable();
  currentMedicalConditionTerm = this.medicalConditionTermSource.asObservable(); // Nieuwe Observable voor medische aandoening

  constructor() { }

  changeSearchTerm(term: string) {
    this.searchTermSource.next(term);
  }

  changeDrugTargetTerm(term: string) {
    this.drugTargetTermSource.next(term);
  }

  changeMedicalConditionTerm(term: string) { // Nieuwe methode om de term voor medische aandoening te veranderen
    this.medicalConditionTermSource.next(term);
  }
}