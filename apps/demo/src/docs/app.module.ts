/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
//material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
//brightlayer-ui modules
import { DrawerModule, EmptyStateModule } from '@brightlayer-ui/angular-components/core';

import { environment } from '../environments/environment';

import { NavigationComponent } from './navigation/navigation.component';
import { ComponentDocsModule } from './pages/component-docs/component-docs.module';
// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { NgxGoogleAnalyticsModule, provideGoogleAnalytics } from '@hakimio/ngx-google-analytics';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  providers: [provideGoogleAnalytics(environment.ga)],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ComponentDocsModule,
    CommonModule,
    DrawerModule,
    EmptyStateModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatChipsModule,
    NgxGoogleAnalyticsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
