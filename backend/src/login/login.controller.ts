import { Controller, Get, Post, Param, Body, Query, Res, Render, Session } from '@nestjs/common';
import { UsuarioService } from '../usuarios/usuario.service';
import { Response } from 'express';
import { b64decode, b64encode } from 'src/utils/functions';

@Controller("login")
export class LoginController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  @Render("login")
  index(@Query("err") encError:string) { 

    return { error : b64decode(encError) };
  }

  @Post()
  login(@Body() { email, senha }:any, @Res() res:Response, @Session() session:Record<string,any>) {
    
    const usuario = this.usuarioService.obterPorEmailESenha(email, senha);
    if (usuario) {
      session.usuario = usuario;
      return res.redirect("home")
    }

    res.render("login", { error : "Usuário e/ou senha inválidos" })
  }

}
