import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { IndexController } from './index.controller';
import { LoginController } from './login/login.controller';
import { EventoController } from './eventos/evento.controller';
import { EventoService } from './eventos/evento.service';
import { UsuarioService } from './usuarios/usuario.service';


@Module({
  imports: [],
  controllers: [IndexController, LoginController, EventoController],
  providers: [UsuarioService, EventoService],
})
export class AppModule {}
