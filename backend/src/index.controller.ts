import { Controller, Get, Session, Render } from '@nestjs/common';

@Controller()
export class IndexController {
  
  @Get()
  @Render("index")
  index(@Session() { usuario, carrinhoAgrupado }) {
    
    return { usuario, carrinhoAgrupado }; 
  }
}
