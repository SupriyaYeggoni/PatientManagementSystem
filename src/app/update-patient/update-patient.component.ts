import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit{
  id!: number;
  patient: Patient = new Patient();
  constructor(private employeeService: PatientService,
    private route: ActivatedRoute,
    private router: Router) { }

    userName : any;
  fname : any;
  mname : any;
  lname : any;
  mothername : any;
  formData : any;

  ngOnInit(): void {

    this.formData = new FormGroup({

      id : new FormControl('',[Validators.required]),
       
       fname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]*'),Validators.minLength(2)]),
       
       lname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]*'),Validators.minLength(1)]),
       
       mobilenumber : new FormControl('',[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10), Validators.maxLength(10)]),
       
       disease : new FormControl('',[Validators.required]),
  
       age : new FormControl('',[Validators.required,Validators.maxLength(2)]),
  
       admitteddate : new FormControl('',[Validators.required]),
       gender : new FormControl('',[Validators.required]),
  
        dischargedate : new FormControl('',[Validators.required]),
  
       amount : new FormControl('',[Validators.required]),
  
      bamount : new FormControl('',[Validators.required]),
  
       tamount : new FormControl('',[Validators.required]),
     });

  
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    }, error => console.log(error));
}

  
  
  get firstname(){
   return this.formData.get('fname')
  }
 
  get lastname(){
   return this.formData.get('lname')
  }
  
  get phonenumber(){
    return this.formData.get('mobilenumber')
   }
  
  get dis(){
   return this.formData.get('disease')
  }
  get addate(){
   return this.formData.get('admitteddate')
  }
  get disdate(){
   return this.formData.get('dischargedate')
  }
  get age(){
   return this.formData.get('age')
  }
  
  get gender(){
   return this.formData.get('gender')
  }
  get amt(){
    return this.formData.get('amount')
   }
  
   get bamt(){
    return this.formData.get('bamount')
   }
   
   get tamt(){
    return this.formData.get('tamount')
   }

  onSubmit(){
    this.employeeService.updatePatient(this.id, this.patient).subscribe( data =>{
      this.goToPatientList();
    }
    , error => console.log(error));
  }

  goToPatientList(){
    this.router.navigate(['/patients']);
  }
}
