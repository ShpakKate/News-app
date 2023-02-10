import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-deleting-user',
  templateUrl: './deleting-user.component.html',
  styleUrls: ['./deleting-user.component.scss']
})
export class DeletingUserComponent {

  constructor( public dialog: MatDialogRef<DeletingUserComponent>) {}

  onCancelClick(){
    this.dialog.close();
  }

  onDeleteClick() {
    this.dialog.close(true);
  }
}
