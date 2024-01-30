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
    return (drugsByIndication as DrugByIndication[])
      .filter(item => item.disease && item.disease.toLowerCase().includes(searchTerm.toLowerCase()))
      .map(item => item.disease);
  }
}
