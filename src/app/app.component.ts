import { usuarioService } from './componentes/services/usuarios.service';
import { RegisterUserService } from './componentes/services/registerUser.service';
import { Component } from '@angular/core';
import { usuario } from 'src/app/componentes/interfaces/usuario';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: usuario = {
    Nombre:'',
    Apellido: ''
  };

  addressForm = this.fb.group({
    Nombre: [null, Validators.required],
    Apellido: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,private _userRegister: usuarioService) {}

  crearUsuario() {
      const _user: usuario = {
        Nombre: this.addressForm.value.userName,
        Apellido: this.addressForm.value.password,
      }
      this._userRegister.post(_user);

  }



}

