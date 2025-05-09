import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

email:string;
  errorMsg:any;
  constructor(private authservice:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  forgetPassword(email:string) {
    this.authservice.resetPassword(email).then(
      () => {
        this.router.navigate(['/login'])
      },
      (error) => {
        this.errorMsg=error
      }
    )
  }

}
