interface DrugByIndication {
  trial_id: string;
  unapproved: string;
  disease: string;
}

import { Injectable } from '@angular/core';
import drugsByIndication from '../../assets/drugs_by_indication.json';

@Injectable({
  providedIn: 'root'
})
export class DrugsByIndicationService {
  getDiseases(searchTerm: string = ''): string[] {
    if (!searchTerm.trim()) {
      return [];
    }
    const uniqueDiseases = new Set<string>(
      drugsByIndication
        .filter(item => item.disease && item.disease.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(item => item.disease)
        .filter((disease): disease is string => !!disease) // Verwijder undefined waarden
    );
    return Array.from(uniqueDiseases);
  }

  getDrugsByDisease(disease: string): DrugByIndication[] {
    return drugsByIndication
      .filter((drug): drug is DrugByIndication => drug.disease === disease && typeof drug.disease === 'string')
      .map(drug => ({
        trial_id: drug.trial_id,
        unapproved: drug.unapproved,
        disease: drug.disease
      }));
  }
}