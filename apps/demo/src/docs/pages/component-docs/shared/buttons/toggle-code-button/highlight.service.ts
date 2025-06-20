import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

import 'prismjs';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-java';
// import 'prismjs/components/prism-markup';
// import 'prismjs/components/prism-ruby';
// import 'prismjs/components/prism-sass';
// import 'prismjs/components/prism-css';
// import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
@Injectable({ providedIn: 'root' })
export class HighlightService {
  private readonly platformId = inject(PLATFORM_ID);

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      window.Prism.highlightAll();
    }
  }
}
