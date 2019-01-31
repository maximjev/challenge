import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogData {
  description: string;
}

@Component({
  selector: 'app-todo-create-modal',
  templateUrl: './todo-create-modal.html'
})
export class TodoCreateModal {

  constructor(
    public dialogRef: MatDialogRef<TodoCreateModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
