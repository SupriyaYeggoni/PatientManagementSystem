import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhatisComponent } from './whatis/whatis.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GetinvolveComponent } from './getinvolve/getinvolve.component';
import { FormComponent } from './form/form.component';

import { WhocandonateComponent } from './whocandonate/whocandonate.component';
import { HowdonationworksComponent } from './howdonationworks/howdonationworks.component';
import { WhatcanbedonatedComponent } from './whatcanbedonated/whatcanbedonated.component';
import { LivingdonarComponent } from './livingdonar/livingdonar.component';
import { DonationafterlifeComponent } from './donationafterlife/donationafterlife.component';
import { HospitalFormComponent } from './hospital-form/hospital-form.component';


import { ViewComponent } from './view/view.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';



const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent,
  },
  {
    path : 'whatis',
    component : WhatisComponent,
  },
  {
    path : 'form',
    component : FormComponent,
  },
  {
    path : 'getinvolve',
    component : GetinvolveComponent,
  },
  {
    path : 'aboutus',
    component : AboutusComponent,
  },
  
  {
    path : 'whocandonate',
    component : WhocandonateComponent,
  },
  {
    path : 'howdonationworks',
    component : HowdonationworksComponent,
    // children:
    // [
    //   {
    //     path : 'livingdonar',
    //     component : LivingdonarComponent,
    //   },
    //   {
    //     path : 'donationafterlife',
    //     component : DonationafterlifeComponent,
    //   },
    // ]
  },
  {
    path : 'whatcanbedonated',
    component : WhatcanbedonatedComponent,
  },
  {
    path : 'howdonationworks/livingdonar',
    component : LivingdonarComponent,
  },
  {
    path : 'howdonationworks/donationafterlife',
    component : DonationafterlifeComponent,
  },
  {
    path : 'home/hospital-form',
    component : HospitalFormComponent,
  },
  {
    path : 'home/form',
    component : FormComponent,
  },
  {
    path : 'whatcanbedonated/form',
    component : FormComponent,
  },

  {
    path : 'patients',
    component : ViewComponent,
  },
  
  {
    path : 'hospital-form',
    component : HospitalFormComponent,
  },
  {path: '', redirectTo: 'patients', pathMatch: 'full'},
  {path: 'update-patient/:id', component: UpdatePatientComponent},
  {path: 'patient-details/:id', component: PatientDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
