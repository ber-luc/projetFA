import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackOfficeComponent} from "./back-office.component";
import {ConnexionComponent} from "./connexion/connexion.component";

const routes: Routes = [
  {
    path: '',
    component: BackOfficeComponent,
    children: [
      {
        path: 'connexion',
        component: ConnexionComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'connexion'
      },
      {
        path:'**',
        pathMatch:'full',
        redirectTo:'connexion'
      }
    ]
  }
];

@NgModule({
  declarations:[BackOfficeComponent, ConnexionComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeModule { }
