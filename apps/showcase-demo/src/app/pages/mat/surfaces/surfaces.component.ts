import { Component, ViewEncapsulation } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-mat-surfaces',
    templateUrl: './surfaces.component.html',
    styleUrls: ['./surfaces.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'host',
    },
    standalone: true,
    imports: [MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule, MatExpansionModule, NgTemplateOutlet],
})
export class MatSurfacesComponent {}
