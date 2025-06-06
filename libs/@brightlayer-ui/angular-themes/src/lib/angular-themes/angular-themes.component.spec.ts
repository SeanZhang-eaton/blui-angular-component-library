import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularThemesComponent } from './angular-themes.component';

describe('AngularThemesComponent', () => {
    let component: AngularThemesComponent;
    let fixture: ComponentFixture<AngularThemesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AngularThemesComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AngularThemesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
