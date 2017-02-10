import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent{

  myForm: FormGroup;
  genders = ['male', 'female'];

  constructor() {
    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl("yubraj",
                                    [Validators.required, //required
                                    Validators.minLength(4)]), // set minimum length of the username
        'email': new FormControl("yubraj@gmail.com",
                                  [Validators.required,
                                  Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
      }),
      'password': new FormControl("asdfsdf", Validators.required),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([
        new FormControl('', Validators.required)
      ])
    });
  }

  onSubmit(){
    console.log(this.myForm.value);
  }

  onAddHobby(){
    const hobby = <FormArray>this.myForm.controls['hobbies'];
    hobby.push(new FormControl('', Validators.required));
  }
}
