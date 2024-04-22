import { Controller, Get, Session, Render } from '@nestjs/common';

@Controller()
export class IndexController {
  
  @Get()
  @Render("index")
  index(@Session() { user, groupedCart }) {
    
    return { user, groupedCart }; 
  }
}
