import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {usuario: 'alex', nombre: 'Alejandro', apellido: 'Ramos', sexo: 'Masculino'},
    {usuario: 'pika', nombre: 'Alejandro', apellido: 'Moreno', sexo: 'Masculino'},
    {usuario: 'dano', nombre: 'Daniel', apellido: 'Bernabé', sexo: 'Masculino'},
  ];

  constructor() { }


  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }

}
