import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ContactComponent} from "../contact/contact.component";
import {MentionsComponent} from "../mentions/mentions.component";

@Component({
  selector: 'footer-agoraPS',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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

  openMentionsModal(): void {
    const dialogRef = this.dialog.open(MentionsComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
