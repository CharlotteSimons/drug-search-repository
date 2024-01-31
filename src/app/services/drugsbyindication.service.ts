// src/app/services/drugsbyindication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Drug } from './drug.service'; // Zorg ervoor dat dit pad correct is
import drugsByIndication from '../../assets/drugs_by_indication.json';

interface DrugByIndication {
  trial_id: string;
  unapproved: string;
  disease?: string; // Maak 'disease' optioneel als het undefined kan zijn
}

@Injectable({
  providedIn: 'root'
})
export class DrugsByIndicationService {
  constructor(private http: HttpClient) {}

  getDrugsByDisease(disease: string): Observable<DrugByIndication[]> {
    return this.http.get<Drug[]>('assets/unapproved.json').pipe(
      map((drugs: Drug[]) => {
        const uniqueDrugs = new Set<string>();
        const filteredDrugs = drugsByIndication
          .filter(indication => indication.disease?.toLowerCase() === disease.toLowerCase())
          .map(indication => {
            const drug = drugs.find(d => d.main_drug === indication.unapproved || Object.values(d).includes(indication.unapproved));
            return {
              trial_id: indication.trial_id,
              unapproved: drug ? drug.main_drug : indication.unapproved,
              disease: indication.disease
            };
          })
          // Filter om alleen unieke main_drug waarden toe te voegen
          .filter(drug => {
            const isUnique = !uniqueDrugs.has(drug.unapproved);
            uniqueDrugs.add(drug.unapproved);
            return isUnique;
          });
        return filteredDrugs;
      })
    );
  }

  getDiseases(searchTerm: string = ''): Observable<string[]> {
    return this.http.get<DrugByIndication[]>('assets/drugs_by_indication.json').pipe(
      map((indications: DrugByIndication[]) => {
        const uniqueDiseases = new Set<string>(
          indications
            .filter(indication => indication.disease && indication.disease.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(indication => indication.disease as string) // Cast naar string om undefined te vermijden
        );
        return Array.from(uniqueDiseases);
      })
    );
  }
}