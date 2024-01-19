// aanroepen van data files in assets
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Drug {
  main_drug: string;
  // Voeg andere relevante properties toe
}

interface Gene {
  gene_name: string;
  // Voeg andere relevante properties toe
}

interface DrugTarget {
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

  getGenes(): Observable<Gene[]> {
    return this.http.get<Gene[]>('assets/Gene.json');
  }

  getDrugTargets(): Observable<DrugTarget[]> {
    return this.http.get<DrugTarget[]>('assets/drug_targets.json');
  }
}