import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   
  

  patients!: Patient[];

  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPatients();
  }

  private getPatients(){
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    });
  }
  patientDetails(id: number){
    this.router.navigate(['patient-details', id]);
  }

  updatePatient(id: number){
    this.router.navigate(['update-patient',id])
  }

  deletePatient(id: number){
    this.patientService.deletePatient(id).subscribe( data => {
      console.log(data);
      this.getPatients();
    })
  }

}
