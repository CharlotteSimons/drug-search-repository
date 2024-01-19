import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchInputService {
  private searchTermSource = new BehaviorSubject<string>('');
  private drugTargetTermSource = new BehaviorSubject<string>('');

  currentSearchTerm = this.searchTermSource.asObservable();
  currentDrugTargetTerm = this.drugTargetTermSource.asObservable();

  constructor() { }

  changeSearchTerm(term: string) {
    this.searchTermSource.next(term);
  }

  changeDrugTargetTerm(term: string) {
    this.drugTargetTermSource.next(term);
  }
}