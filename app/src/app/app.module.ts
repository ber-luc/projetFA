import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {MenuComponent} from "./homepage/menu/menu.component";
import {HeaderComponent} from "./homepage/header/header.component";
import {PresentationComponent} from "./homepage/presentation/presentation.component";
import {DescriptionComponent} from "./homepage/description/description.component";
import {FooterComponent} from "./homepage/footer/footer.component";
import {ContactComponent} from "./homepage/contact/contact.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {MentionsComponent} from "./homepage/mentions/mentions.component";


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    HeaderComponent,
    PresentationComponent,
    DescriptionComponent,
    FooterComponent,
    ContactComponent,
    MentionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
