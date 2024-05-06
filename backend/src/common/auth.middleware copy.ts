import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    
    const session:Record<string, any> = req.session; 
    if (!session.usuario) res.redirect("/login");
    next();
  }
}
