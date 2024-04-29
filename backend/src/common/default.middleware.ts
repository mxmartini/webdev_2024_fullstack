import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class DefaultMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    
    const session:Record<string, any> = req.session; 
    if (!session.usuario) session.usuario = null; //{ nome: "Max Martini", email: "maxmmartini@gmail.com", ultLogin: "2024-04-16 11:19:20" }
    if (!session.carrinhoAgrupado) session.carrinhoAgrupado = { "QR": 0, "RSVP": 0, "STD": 0 };
    next();
  }
}
