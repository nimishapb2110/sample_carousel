import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule , MatNativeDateModule, MatDatepickerModule} from '@angular/material';


import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {  CarouselModule } from 'angular-bootstrap-md';
import { DataServiceService } from './data-service.service';
import { MyAppComponentComponent } from './my-app-component/my-app-component.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ComponentSearchComponent } from './component-search/component-search.component';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { SuggestionCarouselComponent } from './suggestion-carousel/suggestion-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponentComponent,
    ComponentSearchComponent,
    ApplyFormComponent,
    SuggestionCarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    CarouselModule,
    HttpModule,
    HttpClientModule,
    MatInputModule, 
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
