import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mat-dialog-demo,mat-dialog-demo',
  templateUrl: './feedback-dialog.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButton, MatDialogClose],
})
class FeedbackDialogExampleComponent {}

@Component({
  selector: 'app-mat-bottom-sheet-demo,mat-bottom-sheet-demo',
  templateUrl: './feedback-bottom-sheet.component.html',
  standalone: true,
  imports: [MatNavList, MatListItem],
})
class FeedbackBottomSheetExampleComponent {
  constructor(private readonly _bottomSheetRef: MatBottomSheetRef<FeedbackBottomSheetExampleComponent>) {}

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
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatProgressSpinner, MatProgressBar, MatButton],
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
    this.dialog.open(FeedbackDialogExampleComponent);
  }

  openBottomSheet(): void {
    this._bottomSheet.open(FeedbackBottomSheetExampleComponent);
  }
}
