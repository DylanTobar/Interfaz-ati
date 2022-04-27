
import { Component } from '@angular/core';
import { usuario } from 'src/app/componentes/interfaces/usuario';
import { FormBuilder, Validators } from '@angular/forms';
import { usuarioService } from '../componentes/services/usuarios.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  user: usuario = {
    Codigo: '',
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
        Codigo: "",
        Nombre: this.addressForm.value.Nombre,
        Apellido: this.addressForm.value.Apellido,
      }
      this._userRegister.post(_user);

  }



}
