import { Component } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {
  id!: number;
  patient!: Patient; 
  constructor(private route: ActivatedRoute, private employeService: PatientService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.patient = new Patient();
    this.employeService.getPatientById(this.id).subscribe( data => {
      this.patient= data;
    });
  }
}
