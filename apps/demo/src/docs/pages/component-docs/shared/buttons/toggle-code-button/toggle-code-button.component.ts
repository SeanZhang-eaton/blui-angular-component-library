import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { HighlightService } from './highlight.service';
@Component({
  selector: 'app-toggle-code-button',
  template: `
    <button mat-stroked-button color="primary" style="width: 150px; margin-top: 8px" (click)="toggleShowCodeButton()">
      {{ showCode ? 'Hide' : 'Show' }} Code
    </button>
  `,
})
export class ToggleCodeButtonComponent {
  private readonly highlightService = inject(HighlightService);
  @Input() showCode: boolean;
  @Output() showCodeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  toggleShowCodeButton(): void {
    this.showCode = !this.showCode;
    this.showCodeChange.emit(this.showCode);
    setTimeout(() => {
      this.highlightService.highlightAll();
      window.dispatchEvent(new Event('resize'));
    });
  }
}
