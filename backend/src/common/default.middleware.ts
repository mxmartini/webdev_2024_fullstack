import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class DefaultMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    
    // DISABLE HTTP TRACE
    const allowedMethods = ['GET','POST','PUT','DELETE'];
    if (!allowedMethods.includes(req.method))
      return res.status(405).send('Method Not Allowed');

    const session:Record<string, any> = req.session; 
    if (!session.usuario) session.usuario = null;
    if (!session.carrinhoAgrupado) session.carrinhoAgrupado = { "QR": 0, "RSVP": 0, "STD": 0 };
    next();
  }
}
