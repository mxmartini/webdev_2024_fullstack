import { Injectable } from '@nestjs/common';
import { Evento, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventoService {

  constructor(private prisma: PrismaService) {}

  async getEventos(): Promise<Evento[]> {

    return this.prisma.evento.findMany();
  }

  async getEventoPorId(id: Prisma.EventoWhereUniqueInput): Promise<Evento | null> {

    return this.prisma.evento.findUniqueOrThrow({ where : id });
  }

}
