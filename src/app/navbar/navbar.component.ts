import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private jwtHelper: JwtHelperService, private router: Router) { }

  ngOnInit(): void {
  }

  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("jwt");

    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }

    return false;
  }

  logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("refreshToken");
    this.router.navigate(["/"]);
  }
}
