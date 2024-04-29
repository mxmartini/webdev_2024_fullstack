import { Controller, Get, Post, Param, Res, Render, Session } from '@nestjs/common';
import { EventoService } from 'src/eventos/evento.service';
import { Response } from 'express';


@Controller("home")
export class HomeController { 
  constructor(private readonly eventoService: EventoService) {}

  @Get()
  index(@Res() res:Response, @Session() { usuario, carrinhoAgrupado }) {
    if(!usuario) return res.redirect("/login") 
    return res.render("home", { usuario, carrinhoAgrupado });
  }


  @Post()
  async pesquisar(@Res() res: Response){
    const eventos = await this.eventoService.getEventos();
    res.render("home", { eventos })
  }
}
