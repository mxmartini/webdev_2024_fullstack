import { Module } from '@nestjs/common';
import { IndexController } from './index.controller';
import { EventoController } from './evento.controller';
import { EventoService } from './evento.service';

@Module({
  imports: [],
  controllers: [IndexController, EventoController],
  providers: [EventoService],
})
export class AppModule {}
