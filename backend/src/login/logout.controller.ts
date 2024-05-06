import { Controller, Get, Post, Req, Body, Res, Render, Session, Redirect } from '@nestjs/common';
import { UsuarioService } from '../usuarios/usuario.service';
import { Request, Response } from 'express';
import { b64decode, b64encode } from 'src/utils/functions';

@Controller("logout")
export class Logoutontroller {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  @Redirect("login")
  index(@Session() session:any) { 
    session.destroy();
  }
}
