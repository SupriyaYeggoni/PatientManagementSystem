import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-hospital-form',
  templateUrl: './hospital-form.component.html',
  styleUrls: ['./hospital-form.component.css']
})
export class HospitalFormComponent implements OnInit{

  // constructor(private patientService : PatientService,
  //   private router:Router){ }
 
  patient : Patient = new Patient();
  constructor(private patinetService: PatientService,
    private router: Router) { } 

  userName : any;
  fname : any;
  mname : any;
  lname : any;
  mothername : any;
  formData : any;

  // p:Patient=new Patient();

  ngOnInit() : void{
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


  }

  // insertdata(insertform:{value:any;}){
  //   return this.p1.insertform1(insertform.value).subscribe();
  // }

  // onSubmit(){
  //  console.log(this.p);
  //  this.savePatient();
  // }

  // savePatient(){
  //   this.patientService.createPatient(this.p).subscribe(data =>{
  //     console.log(data);
  //     this.goToPatientList();
      
  //   },
  //   error => console.log(error));
    
  // }

  // goToPatientList(){
  //   this.router.navigate(['/view']);
  // }



  get id(){
    return this.formData.get('id')
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

   savePatient(){
    this.patinetService.createPatient(this.patient).subscribe(data =>{
      console.log(data);
      this.goToPatientList();
    }
    ,
    error => console.log(error));
  }

  goToPatientList(){
    this.router.navigate(['/patients']);
  }
  
  onSubmit(){
    console.log(this.patient);
    this.savePatient();
  }
   
  
}
