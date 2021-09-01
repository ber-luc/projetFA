import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {
    path: '',
    children: [
      //{
        //path: 'admin',
        //loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule)
      //},
      {
        path:'',
        pathMatch:'full',
        component: HomepageComponent
      },
      {
        path:'**',
        pathMatch:'full',
        component: HomepageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
