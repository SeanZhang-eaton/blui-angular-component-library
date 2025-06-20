import { Component, OnInit } from '@angular/core';

import { MarkdownService } from 'ngx-markdown';

import { MarkdownSplitService } from '../../../../../services/markdown-split/markdown-split.service';

@Component({
  selector: 'app-drawer-body-doc',
  template: `
    <app-component-doc-scaffold [md]="md" [hasExamples]="false" [hasPlayground]="false">
      <div examples>
        <app-coming-soon></app-coming-soon>
      </div>
      <div playground>
        <app-coming-soon></app-coming-soon>
      </div>
      <div knobs>
        <app-coming-soon></app-coming-soon>
      </div>
    </app-component-doc-scaffold>
  `,
  styleUrls: ['./drawer-body-doc.component.scss'],
})
export class DrawerBodyDocComponent implements OnInit {
  md: string;

  constructor(
    private readonly _splitService: MarkdownSplitService,
    private readonly _markdownService: MarkdownService
  ) {}

  ngOnInit(): void {
    this._markdownService.getSource(`assets/md/Drawer.md`).subscribe((data) => {
      const delimiterTop = '## Drawer Body';
      const delimiterBottom = '## Drawer Nav Group';
      const subsection = this._splitService.subsection(data, delimiterTop, delimiterBottom);
      this.md = subsection.replace('images/', 'assets/md/images/');
    });
  }
}
