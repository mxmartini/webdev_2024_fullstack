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
  async getEventoPorId(@Param("id") id: string) {
    return this.eventoService.getEventoPorId({ id : Number(id) });
  }

}
