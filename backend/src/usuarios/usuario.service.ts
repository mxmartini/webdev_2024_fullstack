import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs';

@Injectable()
export class UsuarioService {

  private usuarios = JSON.parse(fs.readFileSync('./data/usuarios.json', 'utf-8')); 

  getUsuarios(): any {
    return this.usuarios;
  }

  getUsuarioPorId(id: number): any {

    const usuario =  this.usuarios.find(e => e.id == id);
    if(!usuario) return { message: "Nenhum usuário encontrado" };

    return usuario;
  }

  getUsuarioPorEmailESenha(email: string, senha:string): any {

    const usuario =  this.usuarios.find(e => e.email == email && e.senha == senha);
    if(!usuario) return { message: "Nenhum usuário encontrado" };

    return usuario;
  }

}
