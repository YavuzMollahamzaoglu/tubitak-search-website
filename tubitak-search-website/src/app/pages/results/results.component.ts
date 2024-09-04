import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [MatCard, MatCardModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent {}
