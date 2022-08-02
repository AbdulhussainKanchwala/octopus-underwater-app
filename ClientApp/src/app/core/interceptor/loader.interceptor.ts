import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader/loader.service';
import { finalize } from 'rxjs/operators';

export class InterceptorHttpParams extends HttpParams {
	constructor(
	  public interceptorConfig: { isHideLoader: boolean },
	  params?: { [param: string]: string | string[] }
	) {
	  super({ fromObject: params } as HttpParamsOptions); // Passes through the HttpParams
	}
}

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  private count : number = 0;

  constructor(
    private loaderService: LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.showLoaderFlag(request)) { 
      this.showLoader();
      this.count++; 
    }

    return next.handle(request).pipe(
      finalize(() => {
        if (!this.showLoaderFlag(request)) { 
          this.count--;
        }
        if (this.count === 0) {
          this.hideLoader();
        }
    }));
  }

  showLoader() {
		this.loaderService.show();
	}

	hideLoader() {
		this.loaderService.hide();
	}

	showLoaderFlag(request: HttpRequest<any>) {
    return (request.params instanceof InterceptorHttpParams && request.params.interceptorConfig.isHideLoader) ? true : false;
  }
}
