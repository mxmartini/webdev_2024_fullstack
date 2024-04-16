import { Controller, Get, Post, Req, Res, Session, Body } from '@nestjs/common';
import { Response } from 'express'

@Controller()
export class IndexController {
  
  @Get()
  index(@Res() res:Response, @Session() session:Record<string, any>) {

    return res.render("index", { user: null, groupedCart: null } ); 
  }
}
