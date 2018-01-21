import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private welcomeMessage: String = "";
  constructor( private router: Router) { }
  private userName : String = "Megha";
  private password : String = "";

  ngOnInit() {
  }

  onLogin() {
    console.log("Hi "+this.userName);
    this.router.navigateByUrl("/carto");
  }
}
