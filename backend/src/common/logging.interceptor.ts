import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const session = req.session;
    
    return next
      .handle()
      .pipe(
        tap((data) => data ? console.log(`Request data: ${data}`) : console.log("Request..."))
      );
  }
}
