import { Component } from '@angular/core';

@Component({
  selector: 'app-clinical-trials-table',
  templateUrl: './clinical-trials-table.component.html',
  styleUrl: './clinical-trials-table.component.css'
})
export class ClinicalTrialsTableComponent {
  items = [
    { 
      veld1: 'NCT04280822', 
      veld2: 'Phase 3', 
      veld3: 'Recruiting', 
      veld4: 'A Phase III, Randomized Controlled Study of Neo-adjuvant Toripalimab (JS001) in Combination With Chemotherapy Versus Neo-adjuvant Chemotherapy for Resectable Esophageal Squamous Cell Carcinoma', 
      veld5: 'Neoadjuvant immunochemotherapy', 
      veld6: 'Open for criteria',
      showDetails: false, // Voeg deze property toe
      criteria: { // Voeg criteria toe als voorbeeld
        inclusion: ['Age ≥ 18 years.', 'Histologically confirmed colorectal adenocarcinoma.', 'Baseline imaging (CT, MRI, or PET/CT as necessary) or pathological confirmation of liver metastasis, with no extrahepatic metastasis (consideration for inclusion may be given to lesions with a diameter less than 10mm in the lungs or lymph nodes if metastasis is difficult to confirm or is suspected).'],
        exclusion: ['Definite presence of extrahepatic metastasis and/or primary tumor not amenable to curative surgical resection.', 'Severe arterial embolism or ascites.']
        }
      },

      { 
        veld1: 'NCT04280822', 
        veld2: 'Phase 3', 
        veld3: 'Recruiting', 
        veld4: 'A Phase III, Randomized Controlled Study of Neo-adjuvant Toripalimab (JS001) in Combination With Chemotherapy Versus Neo-adjuvant Chemotherapy for Resectable Esophageal Squamous Cell Carcinoma', 
        veld5: 'Neoadjuvant immunochemotherapy', 
        veld6: 'Open for criteria',
        showDetails: false, // Voeg deze property toe
        criteria: { // Voeg criteria toe als voorbeeld
          inclusion: ['Age ≥ 18 years.', 'Histologically confirmed colorectal adenocarcinoma.', 'Baseline imaging (CT, MRI, or PET/CT as necessary) or pathological confirmation of liver metastasis, with no extrahepatic metastasis (consideration for inclusion may be given to lesions with a diameter less than 10mm in the lungs or lymph nodes if metastasis is difficult to confirm or is suspected).'],
          exclusion: ['Definite presence of extrahepatic metastasis and/or primary tumor not amenable to curative surgical resection.', 'Severe arterial embolism or ascites.']
      }
    },
    
        { 
          veld1: 'NCT04280822', 
          veld2: 'Phase 3', 
          veld3: 'Recruiting', 
          veld4: 'A Phase III, Randomized Controlled Study of Neo-adjuvant Toripalimab (JS001) in Combination With Chemotherapy Versus Neo-adjuvant Chemotherapy for Resectable Esophageal Squamous Cell Carcinoma', 
          veld5: 'Neoadjuvant immunochemotherapy', 
          veld6: 'Open for criteria',
          showDetails: false, // Voeg deze property toe
          criteria: { // Voeg criteria toe als voorbeeld
            inclusion: ['Age ≥ 18 years.', 'Histologically confirmed colorectal adenocarcinoma.', 'Baseline imaging (CT, MRI, or PET/CT as necessary) or pathological confirmation of liver metastasis, with no extrahepatic metastasis (consideration for inclusion may be given to lesions with a diameter less than 10mm in the lungs or lymph nodes if metastasis is difficult to confirm or is suspected).'],
            exclusion: ['Definite presence of extrahepatic metastasis and/or primary tumor not amenable to curative surgical resection.', 'Severe arterial embolism or ascites.']
          },
    }
  ];

  toggleDetails(item: any): void {
    item.showDetails = !item.showDetails;
  }
}