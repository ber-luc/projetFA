import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ContactComponent} from "../contact/contact.component";


@Component({
  selector: 'menu-agoraPS',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
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
