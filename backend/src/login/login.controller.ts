import { Controller, Get, Post, Param, Body, Res } from '@nestjs/common';
import { UsuarioService } from '../usuarios/usuario.service';
import { Response } from 'express';

@Controller("login")
export class LoginController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  index(@Res() res:Response) {
    return res.render("login");
  }

  @Post()
  login(@Body() { email, senha }:any, @Res() res:Response) {
    
    if (email == "node.adm@gmail.com" && senha == "123456")
      return res.redirect("home")

    return res.redirect("login?err=")
  }

}
