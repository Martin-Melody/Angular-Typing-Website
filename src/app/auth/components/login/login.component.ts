import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { AuthService } from "../../../services/auth.service";
import { AuthService } from "../.././../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
  }

}
