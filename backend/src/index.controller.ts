import { Controller, Get, Post, Req, Res, Session, Body } from '@nestjs/common';
import { Response } from 'express'

@Controller()
export class IndexController {
  
  @Get()
  index(@Res() res:Response, @Session() session:Record<string, any>) {

    session.user = { name : "Max", group : "admin", email: "max@mail.com" }
    const message =  "Sua primeira aplicacao backend com nest"
    const itens = session.itens
    
    return res.render("welcome", { user: session.user, message, itens } ); 
  }

  @Post()
  post(@Body() body:any, @Res() res:Response, @Session() session:Record<string, any>) {
    
    const user = session.user
    const message = "Sua primeira aplicacao backend com nest"
    
    if(!session.itens) session.itens = [];
    session.itens.push(body.item);
    
    return res.render("welcome", { user, message, itens: session.itens } ); 
  }

  @Post("/sair")
  sair(@Req() req:Request, @Res() res:Response, @Session() session:Record<string, any>) {

    session.destroy();
    return res.redirect("/")
  }
}
