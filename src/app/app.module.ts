import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormComponent } from './form/form.component';
import { GetinvolveComponent } from './getinvolve/getinvolve.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { HowdonationworksComponent } from './howdonationworks/howdonationworks.component';
import { WhocandonateComponent } from './whocandonate/whocandonate.component';
import { WhatcanbedonatedComponent } from './whatcanbedonated/whatcanbedonated.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LivingdonarComponent } from './livingdonar/livingdonar.component';
import { DonationafterlifeComponent } from './donationafterlife/donationafterlife.component';
import { WhatisComponent } from './whatis/whatis.component';
import { PipePipe } from './pipe.pipe';
import { HospitalFormComponent } from './hospital-form/hospital-form.component';


import { ViewComponent } from './view/view.component';
import { Routes,RouterModule } from '@angular/router';

import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    FormComponent,
    GetinvolveComponent,
    AboutusComponent,
   
    HowdonationworksComponent,
    WhocandonateComponent,
    WhatcanbedonatedComponent,
    HeaderComponent,
    FooterComponent,
    LivingdonarComponent,
    DonationafterlifeComponent,
    WhatisComponent,
    PipePipe,
    HospitalFormComponent,
   
    
    ViewComponent,
    UpdatePatientComponent,
    PatientDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
