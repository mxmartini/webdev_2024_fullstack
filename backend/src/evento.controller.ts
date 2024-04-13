import { Controller, Get, Post, Param } from '@nestjs/common';
import { EventoService } from './evento.service';

@Controller("eventos")
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Get()
  getEventos() {
    return this.eventoService.getEventos();
  }

  @Get(":id")
  getEventoPorId(@Param("id") id: number) {
    return this.eventoService.getEventoPorId(id);
  }

}
