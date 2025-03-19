import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title1 = "Welcome";
  title2! : string;

  num1 = 123;
  num!: number;

  condition = true;

  var: any;

  nameList = ['Ali', 'Imen', 'Mohamed'];

  photo = "assets/angular.png";
  

}
