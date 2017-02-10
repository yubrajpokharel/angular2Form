import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent{

  user = {
    username:"Yubraj",
    email:"yubraj@gmail.com",
    password:"asdfasdf",
    gender: "male"
  }
  
  genders = ["male", "female"];

  constructor() { }

  onSubmit(form: NgForm){
    console.log(form.value);
  }
}
