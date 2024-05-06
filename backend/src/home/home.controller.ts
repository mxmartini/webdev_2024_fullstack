import { Controller, Get, Post, Res, Render, Session, Body } from '@nestjs/common';
import { EventoService, EventoFiltroDto } from 'src/eventos/evento.service';

@Controller("home")
export class HomeController { 
  constructor(private readonly eventoService: EventoService) {}

  @Get()
  @Render("home")
  index(@Session() session:any) { 
    
    return { ...session };
  }

  @Post()
  @Render("home")
  async pesquisar(@Body() filtro:EventoFiltroDto, @Session() session:any) {
    session.filtro = filtro;
    const eventos = await this.eventoService.obterPorFiltro(filtro);
    return { ...session, ...filtro, eventos }
  }
  
} 
