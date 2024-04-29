import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { DefaultMiddleware } from './common/default.middleware';
import { IndexController } from './index.controller';
import { LoginController } from './login/login.controller';
import { EventoController } from './eventos/evento.controller';
import { EventoService } from './eventos/evento.service';
import { UsuarioService } from './usuarios/usuario.service';
import { HomeController } from './home/home.controller';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';


@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [IndexController, LoginController, EventoController, HomeController],
  providers: [UsuarioService, EventoService, PrismaService],
})
export class AppModule {}
