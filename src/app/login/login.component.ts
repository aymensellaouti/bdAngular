import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login(formulaire: NgForm) {
    this.authService.login(formulaire.value).subscribe(
      (userIdentifiers) => {
        localStorage.setItem('token', userIdentifiers['id']);
        this.router.navigate(['cv']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
