import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  myForm!:FormGroup;
  errorMsg:any;

  constructor(private authservice:AuthService, private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm(){
    this.myForm = this.fb.group({
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }



  get firstname() {
    return this.myForm.get('firstname')
  }

  get lastname() {
    return this.myForm.get('lastname')
  }

  get email() {
    return this.myForm.get('email')
  }

  get password() {
    return this.myForm.get('password')
  }


  register(){
    const email=this.myForm.get('email').value;
    const password=this.myForm.get('password').value;
    this.authservice.createNewUser(email,password).then(
      () => {
        this.router.navigate(['/login'])
      },
      (error) => {
        this.errorMsg=error
      }
    )
  }
}
