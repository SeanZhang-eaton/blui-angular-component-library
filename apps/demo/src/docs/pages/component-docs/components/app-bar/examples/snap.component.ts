import { AfterViewInit, Component } from '@angular/core';
import { loremIpsum } from './lorem-ipsum';
import { StyleObserver } from 'style-observer';

export const SNAP = `
<div id="app-bar-basic-example" class="scroll-container">
    <blui-app-bar 
        variant="snap" 
        expandedHeight="200" 
        collapsedHeight="64" 
        scrollThreshold="100" 
        scrollContainerId="app-bar-basic-example">
        <div>Content</div>
    </blui-app-bar>
    <div class="content-body">{{ filler }}</div>
</div>
`;

@Component({
    selector: 'app-snap-app-bar-demo',
    template: SNAP,
    styles: [
        `
            .scroll-container {
                width: 100%;
                max-width: 450px;
                max-height: 400px;
                overflow: auto;
                position: relative;
            }
            .content-body {
                padding: 16px;
                background: white;
            }
        `,
    ],
})
export class SnapAppBarComponent implements AfterViewInit {
    filler = loremIpsum;
    ngAfterViewInit() {
        const observer = new StyleObserver((records) => {
            console.log(records);
        });
        observer.observe(document.querySelectorAll('.mat-toolbar'), ['--mat-toolbar-container-background-color']);
    }
}
