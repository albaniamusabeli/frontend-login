import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formularioLogin: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.formularioLogin = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  // Funcion del boton Login del formulario Login
  onLogin(){
    //console.log(this.formularioLogin.value);
    this.authService.login(this.formularioLogin.value.username, this.formularioLogin.value.password)
      .pipe(first()).subscribe(data=>{
        console.log(data);
        
      })
  }


  logout(){
    this.authService.logout();
  }




}
