import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoggedInUserService } from '../services/logged-in-user/logged-in-user.service';
import { ToastCustomService } from '../services/toast-custom.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private userService: LoggedInUserService,
	private _toastCustomService: ToastCustomService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if (!request.headers.has('Authorization')) request = this.addAuthHeaderToRequest(request);
    if (!request.headers.has('Content-Type') && !(request.body instanceof FormData)) request = this.addDefaultHeader(request);

    return next.handle(request)
    .pipe(
			catchError((error : HttpEvent<any>) => {
				//Display appropriate error messages in toast
				this._toastCustomService.handleErrors(error);
				return throwError(() => error);
			})
		);
  }

  addAuthHeaderToRequest(request : HttpRequest<any>) : HttpRequest<any>
	{
		return request.clone({
			setHeaders :
			{
				Authorization: `Bearer ${this.userService.getToken()}`
			}
		});
	}

	addDefaultHeader(request : HttpRequest<any>) : HttpRequest<any>
	{
		return request.clone({
			setHeaders :
			{
				'Content-Type': 'application/json; charset=utf-8'
			}
		});
	}
}
