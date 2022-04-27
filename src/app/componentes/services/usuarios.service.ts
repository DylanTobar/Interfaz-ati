import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class usuarioService {


  constructor(private http:HttpClient) { }

  url="https://seguridad-ati.herokuapp.com/user"


  get(){
    return this.http.get<usuarioService[]>(this.url);
  }


  post(Usuario:usuario)
  {
    return this.http.post(this.url, Usuario).subscribe(
      res => console.log(res)
    )
  }


}
