import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { join } from 'path';
import * as hbs from 'hbs';
import { b64decode, b64encode } from './utils/functions';
import { LoggingInterceptor } from './common/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.use(session({
    secret: "7b36aa635f6db82449f9e4449172f7ba4e0966b35235b30f60da4b2352ad22c5",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30*1000*60 }
  }));

  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true,
  });

  app.useStaticAssets(join(__dirname, '..', 'assets'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  
  
  hbs.registerPartials(join(__dirname, '..', 'views/partials'))
  hbs.registerHelper("eq", (a, b) => a === b)
  hbs.registerHelper("ne", (a, b) => a !== b)
  hbs.registerHelper("gt", (a, b) => a > b)
  hbs.registerHelper("gr", (a, b) => a >= b)
  hbs.registerHelper("lt", (a, b) => a < b)
  hbs.registerHelper("le", (a, b) => a <= b)
  hbs.registerHelper("not", (a) => !a)
  hbs.registerHelper("empty", (a) => a === "" || a === null || a === undefined)
  hbs.registerHelper("bold", (a) => "<b>" + a.fn(this) + "</b>")
  hbs.registerHelper("b64encode", (a) => b64encode(a))
  hbs.registerHelper("b64decode", (a) => b64decode(a))
  hbs.registerHelper("props", (a) => typeof a === 'object' ? Object.keys(a) : [])
  hbs.registerHelper("key", (a, b) => typeof a === 'object' ? a[b] : undefined) 
  hbs.registerHelper("dataPtBr", (a) => new Date(a).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: undefined, timeZone: "America/Sao_Paulo" }))

  await app.listen(3000);
}
bootstrap();


