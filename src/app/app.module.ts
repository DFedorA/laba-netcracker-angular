import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import  {Animals} from "./animal/animal.component";
import  {AnimalsComponent} from "./animals/animals.component";
import {EditingComponent} from './editing/editing.component';
import {HomeComponent} from './home/home.component';
import  {AnimalFormComponent} from "./animals-form/animal-form.component";
import {AppRoutingModule} from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    Animals,
    EditingComponent,
    HomeComponent,
    AnimalsComponent,
    AnimalFormComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
