import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'presentation-agoraPS',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  constructor(public dialog: MatDialog) {}

  openCompaniesModal(): void {
    const dialogRef = this.dialog.open(ContactComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
