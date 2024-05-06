import { Controller, Get, Post, Param, Body, Put, Delete, BadRequestException } from '@nestjs/common';
import { EventoService, EventoCriarDto, EventoAtualizarDto } from 'src/eventos/evento.service';


@Controller("eventos")
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Get()
  obterTodos() {
    return this.eventoService.obterTodos();
  }

  @Get(":id")
  async obterPorId(@Param("id") id: string) {
    return this.eventoService.obterPorId({ id : Number(id) });
  }

  @Post()
  async criar(@Body() dto:EventoCriarDto){
    return await this.eventoService.criar(dto);
  }

  @Put()
  async atualizar(@Body() dto:EventoAtualizarDto){
    return await this.eventoService.atualizar(dto);
  }

  @Delete(":id")
  
  async remover(@Param("id") id:number){
    try {
      return await this.eventoService.remover(id);
    }
    catch(e) {
      throw new BadRequestException("Não foi possível remover");
    }
  }
}
