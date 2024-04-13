import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs';

@Injectable()
export class EventoService {

  private eventos = JSON.parse(fs.readFileSync('./data/eventos.json', 'utf-8')); 

  getEventos(): any {
    return this.eventos;
  }

  getEventoPorId(id: number): any {

    const evento =  this.eventos.find(e => e.id == id);
    if(!evento) return { message: "Nenhum evento encontrado" };

    return evento;
  }

}
