import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

import { Subscription } from 'rxjs';

// Use this service to get viewport size.
@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  breakpointSubscription: Subscription;
  mobileViewport: boolean;

  constructor(private readonly _breakpointObserver: BreakpointObserver) {
    this.breakpointSubscription = this._breakpointObserver.observe(['(max-width: 720px)']).subscribe((result) => {
      const small = Object.keys(result.breakpoints)[0];
      this.mobileViewport = result.breakpoints[small];
    });
  }

  isSmall(): boolean {
    return this.mobileViewport;
  }
}
