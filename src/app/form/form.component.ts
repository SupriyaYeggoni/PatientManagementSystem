import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userName : any;
   fname : any;
   mname : any;
   lname : any;
   mothername : any;
   formData : any;
   ngOnInit(){
    this.formData = new FormGroup({
      userName :  new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.minLength(2)]),
      fname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]*'),Validators.minLength(2)]),
      // mname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]*'),Validators.minLength(2)]),
      lname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]*'),Validators.minLength(1)]),
      mothername : new FormControl('',[Validators.required]),
      mobilenumber : new FormControl('',[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10), Validators.maxLength(10)]),
      mail : new FormControl('',[Validators.required,Validators.email,Validators.minLength(2)]),
      ad : new FormControl('',[Validators.required]),
      ad2 : new FormControl('',[Validators.required]),
      city : new FormControl('',[Validators.required]),
      state : new FormControl('',[Validators.required]),
      code : new FormControl('',[Validators.required,Validators.pattern("^[0-9]*"),Validators.minLength(6), Validators.maxLength(6)]),
      age : new FormControl('',[Validators.required,Validators.maxLength(2)]),
      identity : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z0-9]*$'),Validators.minLength(4)]),
      gender : new FormControl('',[Validators.required]),
      Occupation : new FormControl('',[Validators.required]),
      content : new FormControl('',[Validators.required]),
      identitycard : new FormControl('',[Validators.required]),
      bloodgroup : new FormControl('',[Validators.required]),
    });
   }
   onClickSubmit(){
    console.log(this.formData.value);
   }
   get username() {
    return this.formData.get('userName')
  }
   get firstname(){
    return this.formData.get('fname')
   }
   get middlename(){
    return this.formData.get('mname')
   }
   get lastname(){
    return this.formData.get('lname')
   }
   get motherfathername(){
    return this.formData.get('mothername')
   }
   get phonenumber(){
    return this.formData.get('mobilenumber')
   }
   get email(){
    return this.formData.get('mail')
   }
   get address(){
    return this.formData.get('ad')
   }
   get address2(){
    return this.formData.get('ad2')
   }
   get city(){
    return this.formData.get('city')
   }
   get state(){
    return this.formData.get('state')
   }
   get pincode(){
    return this.formData.get('code')
   }
   get age(){
    return this.formData.get('age')
   }
   get idcard(){
    return this.formData.get('identity')
   }
   get gender(){
    return this.formData.get('gender')
   }
   get bloodgroup(){
    return this.formData.get('bloodgroup')
   }
   get cardid(){
    return this.formData.get('identitycard')
   }
   get occupation(){
    return this.formData.get('Occupation')
   }
   get donation(){
    return this.formData.get('content')
   }
}
