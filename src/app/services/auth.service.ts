import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url = 'http://127.0.0.1:8000/accounts/api/auth/';

  constructor(private http: HttpClient) { }

  login(username:string, password:string){
    return this.http.post<any>(this.api_url, {username, password}).pipe(
      map(user =>{

        if(user && user.token){
          localStorage.setItem("usuarioLogueado", JSON.stringify(user))
        }
        return user;
      })
    )
  }


  // Funcion logout para borrar del localStorage los datos del usuario Logueado
  logout(){
    localStorage.removeItem('usuarioLogueado');
  }


}
