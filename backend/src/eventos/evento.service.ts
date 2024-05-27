import { Injectable } from '@nestjs/common';
import { Evento, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

type EventoFiltro = {
  nome?:any,
  data?:any,
  ativo?:boolean
}

export type EventoFiltroDto = {
  src_nome?:string,
  src_data_ini?:string,
  src_data_fin?:string,
  src_ativo?:number
}

export type EventoCriarDto = {
  nome: string,
  data: string,
  ativo?: string
}

export type EventoAtualizarDto = {
  id: number,
  nome: string,
  data: string,
  ativo?: string
}

@Injectable()
export class EventoService {

  constructor(private prisma: PrismaService) {}

  async obterTodos(): Promise<Evento[]> {

    return this.prisma.evento.findMany();
  }

  async obterPorId(id: Prisma.EventoWhereUniqueInput): Promise<Evento | null> {
    
    return this.prisma.evento.findUniqueOrThrow({ where : id });
  }

  async obterPorFiltro(filtro:EventoFiltroDto): Promise<Evento[]> {
    
    const where: EventoFiltro = {};

    where.nome = { contains: filtro.src_nome }
    
    if (filtro.src_data_ini && filtro.src_data_fin) {
      where.data = {
        gte: new Date(filtro.src_data_ini).toISOString(),
        lte: new Date(filtro.src_data_fin).toISOString(), 
      }
    }

    if (filtro.src_ativo)
      where.ativo = filtro.src_ativo == 1;
    
    return this.prisma.evento.findMany({ where });
  }

  async criar(dto:EventoCriarDto): Promise<Evento | null> {
    
    return this.prisma.evento.create({ data: { 
      nome: dto.nome, 
      data: new Date(dto.data),
      ativo: "ativo" in dto || dto.ativo == "1"
    }});
  }

  async atualizar(dto:EventoAtualizarDto): Promise<Evento | null> {
    
    return this.prisma.evento.update({ where: { id: Number(dto.id) }, data: { 
      nome: dto.nome, 

      ativo: "ativo" in dto || dto.ativo == "1"
    }});
  }

  async remover(id:number): Promise<Evento | null> {
    
    return this.prisma.evento.delete({ where: { id: Number(id) }});
  }
}
