import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    public router: Router,
    public headerComponent:AuthService
    ) {}

  ngOnInit(): void {}

  goToProfile() {
    this.router.navigate(['./profile']);
  }

  goToSignOut(){
    this.router.navigate(['register']);
  }

  goToSignUp(){
    this.router.navigate(['login']);
  }
}
