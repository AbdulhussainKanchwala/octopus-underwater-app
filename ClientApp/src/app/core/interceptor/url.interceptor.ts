import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {

  apiURL = environment.WebAPIProjectURL;

  constructor() { /* constructor code will go here */ }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    try
    {
      new URL(request.url)
    }
    catch
    {
      request = this.modifyRequestURL(request);
    }

    return next.handle(request);
  }

  modifyRequestURL(request : HttpRequest<any>) : HttpRequest<any>
	{
		return request.clone({
			url : new URL(request.url, this.apiURL).href
		});
	}

}
