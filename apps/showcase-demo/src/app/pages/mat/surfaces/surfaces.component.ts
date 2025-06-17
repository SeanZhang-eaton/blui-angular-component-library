import { NgTemplateOutlet } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-mat-surfaces',
  templateUrl: './surfaces.component.html',
  styleUrls: ['./surfaces.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatExpansionModule, NgTemplateOutlet],
})
export class MatSurfacesComponent {}
