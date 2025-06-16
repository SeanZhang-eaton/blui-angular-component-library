import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'mat-dialog-demo',
    templateUrl: 'feedback-dialog.component.html',
    standalone: true,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class FeedbackDialogExample {}

@Component({
    selector: 'mat-bottom-sheet-demo',
    templateUrl: 'feedback-bottom-sheet.component.html',
    standalone: true,
    imports: [MatNavList, MatListItem],
})
export class FeedbackBottomSheetExample {
    constructor(private readonly _bottomSheetRef: MatBottomSheetRef<FeedbackBottomSheetExample>) {}

    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}

@Component({
    selector: 'app-mat-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatProgressSpinner,
        MatProgressBar,
        MatButton,
    ],
})
export class MatFeedackComponent implements OnInit {
    diameter = 40;
    spinnerValue = 0;

    constructor(
        public dialog: MatDialog,
        private readonly _bottomSheet: MatBottomSheet,
        private readonly _ref: ChangeDetectorRef,
        private readonly _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        setInterval(() => {
            this.spinnerValue += 10;
            if (this.spinnerValue > 100) {
                this.spinnerValue = 0;
            }
            this._ref.detectChanges();
        }, 250);
    }

    openSnackBar(message: string, action: string): void {
        this._snackBar.open(message, action);
    }

    openDialog(): void {
        this.dialog.open(FeedbackDialogExample);
    }

    openBottomSheet(): void {
        this._bottomSheet.open(FeedbackBottomSheetExample);
    }
}
