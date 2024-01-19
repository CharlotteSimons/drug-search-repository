import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { DrugPageComponent } from './drug-page/drug-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'results', component: ResultsPageComponent },
  { path: 'drugpage', component: DrugPageComponent },
  { path: 'drugpage/:drugName', component: DrugPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }