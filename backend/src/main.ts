import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { join } from 'path';
import * as hbs from 'express-handlebars';

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
  app.engine('hbs', hbs({ 
   extname: "hbs",
   defaultLayout: null,
   helpers: { 
      eq: (a, b) => a === b,
      ne: (a, b) => a !== b,
      gt: (a, b) => a > b,
      ge: (a, b) => a >= b,
      lt: (a, b) => a < b,
      le: (a, b) => a <= b,
      not: (a) => !a,
      empty: (a) => a === "" || a === null || a === undefined, 
      bold: (a) => '<b>' + a.fn(this) + "</b>", 
    } 
  }));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
