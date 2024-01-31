// src/app/services/drug.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Drug {
  main_drug: string;
  [key: string]: string; // Dit vangt alle andere properties op zoals '0', '1', etc.
}

export interface DrugTarget {
  target_name: string;
  // Voeg andere relevante properties toe
}

@Injectable({
  providedIn: 'root'
})
export class DrugsService {
  constructor(private http: HttpClient) { }

  getDrugs(): Observable<Drug[]> {
    return this.http.get<Drug[]>('assets/unapproved.json');
  }

  getDrugTargets(): Observable<DrugTarget[]> {
    return this.http.get<DrugTarget[]>('assets/drug_targets.json');
  }
}