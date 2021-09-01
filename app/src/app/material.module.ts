import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";


const materialModules = [
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatCheckboxModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {}
