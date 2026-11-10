import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.sevice';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styles: ``,
  templateUrl: './login.html',
})
export class Login {

  user = new User();
  erreur = false;

  constructor(private authService : AuthService,
  private router: Router) { }

  ngOnInit() { }

  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
      this.router.navigate(['/']);
    else
      //alert('Login ou mot de passe incorrecte!');
      this.erreur= true;
  }

}
