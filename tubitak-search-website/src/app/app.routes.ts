import { Routes } from '@angular/router';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { ResultsComponent } from './pages/results/results.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'results', component: ResultsComponent },
];
