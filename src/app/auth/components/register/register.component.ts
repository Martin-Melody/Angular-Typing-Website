import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    public RegisterComponent: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }
}
