import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchTabsComponent } from './landing-page/search-tabs/search-tabs.component';
import { DrugsBarComponent } from './landing-page/drugs-bar/drugs-bar.component';
import { SearchButtonDrugsComponent } from './landing-page/drugs-bar/search-button-drugs/search-button-drugs.component';
import { SearchMedicalConditionComponent } from './landing-page/drugs-bar/search-medical-condition/search-medical-condition.component';
import { SearchDrugTargetComponent } from './landing-page/drugs-bar/search-drug-target/search-drug-target.component';
import { SearchDrugComponent } from './landing-page/drugs-bar/search-drug/search-drug.component';
import { InfoButtonDrugsComponent } from './landing-page/drugs-bar/search-drug/info-button-drugs/info-button-drugs.component';
import { SidePanelDrugsComponent } from './landing-page/drugs-bar/search-drug/side-panel-drugs/side-panel-drugs.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { StartNewSearchComponent } from './results-page/start-new-search/start-new-search.component';
import { ResultsTableComponent } from './results-page/results-table/results-table.component';
import { DrugPageComponent } from './drug-page/drug-page.component';
import { BackToPreviousPageComponent } from './drug-page/back-to-previous-page/back-to-previous-page.component';
import { SubstanceInformationComponent } from './drug-page/substance-information/substance-information.component';
import { ClinicalTrialsComponent } from './drug-page/clinical-trials/clinical-trials.component';
import { ClinicalTrialsTableComponent } from './drug-page/clinical-trials/clinical-trials-table/clinical-trials-table.component';
import { ExpandedAccesProgramsComponent } from './drug-page/expanded-acces-programs/expanded-acces-programs.component';
import { SearchButtonEapComponent } from './drug-page/expanded-acces-programs/search-button-eap/search-button-eap.component';
import { SafetyComponent } from './drug-page/safety/safety.component';
import { IndicationComponent } from './drug-page/indication/indication.component';
import { ExtraSafetyComponent } from './drug-page/extra-safety/extra-safety.component';
import { PharmacokineticsComponent } from './drug-page/pharmacokinetics/pharmacokinetics.component';
import { MahComponent } from './drug-page/mah/mah.component';
import { InfoButtonDrugTargetComponent } from './landing-page/drugs-bar/search-drug-target/info-button-drug-target/info-button-drug-target.component';
import { SidePanelDrugTargetComponent } from './landing-page/drugs-bar/search-drug-target/side-panel-drug-target/side-panel-drug-target.component';
import { SidePanelMedicalConditionComponent } from './landing-page/drugs-bar/search-medical-condition/side-panel-medical-condition/side-panel-medical-condition.component';
import { InfoButtonMedicalConditionComponent } from './landing-page/drugs-bar/search-medical-condition/info-button-medical-condition/info-button-medical-condition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackToTopComponent } from './drug-page/back-to-top/back-to-top.component';
import { SearchButtonMedicalComponent } from './landing-page/drugs-bar/search-button-medical/search-button-medical.component';
import { DividerComponent } from './landing-page/drugs-bar/divider/divider.component';
import { CapitalizeFirstPipe } from './capitalize-first.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchTabsComponent,
    DrugsBarComponent,
    SearchButtonDrugsComponent,
    SearchMedicalConditionComponent,
    SearchDrugTargetComponent,
    SearchDrugComponent,
    InfoButtonDrugsComponent,
    SidePanelDrugsComponent,
    ResultsPageComponent,
    StartNewSearchComponent,
    ResultsTableComponent,
    DrugPageComponent,
    BackToPreviousPageComponent,
    SubstanceInformationComponent,
    ClinicalTrialsComponent,
    ClinicalTrialsTableComponent,
    ExpandedAccesProgramsComponent,
    SearchButtonEapComponent,
    SafetyComponent,
    IndicationComponent,
    ExtraSafetyComponent,
    PharmacokineticsComponent,
    MahComponent, 
    InfoButtonDrugTargetComponent,
    SidePanelDrugTargetComponent,
    SidePanelMedicalConditionComponent,
    InfoButtonMedicalConditionComponent,
    BackToTopComponent,
    SearchButtonMedicalComponent,
    DividerComponent,
    CapitalizeFirstPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
    RouterModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  providers: [
    // Voeg hier je services toe als ze niet 'providedIn' gebruiken
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
