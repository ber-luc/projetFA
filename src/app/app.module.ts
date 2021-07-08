import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {MenuComponent} from "./homepage/menu/menu.component";
import {HeaderComponent} from "./homepage/header/header.component";
import {PresentationComponent} from "./homepage/presentation/presentation.component";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    HeaderComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
