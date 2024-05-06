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
import { AuthMiddleware } from './common/auth.middleware copy';
import { Logoutontroller } from './login/logout.controller';


@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [IndexController, LoginController, Logoutontroller, EventoController, HomeController],
  providers: [UsuarioService, EventoService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DefaultMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: '/home', method: RequestMethod.ALL },
        { path: '/convidado', method: RequestMethod.ALL }
      )
    
  }
}
