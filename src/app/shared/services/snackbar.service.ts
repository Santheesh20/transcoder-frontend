import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  snackbarSuccess(message: string) {
    const me = this;
    if (message) {
      me.snackBar.open(message, 'DISMISS', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: ['snackbar']
      });
    }
  }

  snackbarError(message: string) {
    const me = this;
    if (message) {
      me.snackBar.open(message, 'DISMISS', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: ['snackbar']
      });
    }
  }

  snackbarClose() {
    const me = this;
    me.snackBar.dismiss();
  }
}
