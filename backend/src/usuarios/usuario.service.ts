import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs';
import { b64encode } from 'src/utils/functions';

@Injectable()
export class UsuarioService {

  private usuarios = JSON.parse(fs.readFileSync('./data/usuarios.json', 'utf-8')); 

  obterTodos(): any {
    return this.usuarios;
  }

  obterPorId(id: number): any {

    return this.usuarios.find(e => e.id == id);
  }

  obterPorEmailESenha(email: string, senha:string): any {

    return this.usuarios.find(e => e.email == email && e.senha == b64encode(senha));
  }

}
