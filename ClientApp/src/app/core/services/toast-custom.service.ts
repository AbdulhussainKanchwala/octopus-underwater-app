import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastCustomService {

  constructor(
    private _toastr: ToastrService
  ) { /* constructor code will go here */ } 

  handleErrors(errorResponse: any){
    let genericErrorMessage = 'Something went wrong!';
    let logoutMessage = 'Your session has been expired, logging in again!';
    if(errorResponse.status == 401){
      //Call logout API
      //After logout API response clear localstorage and redirect to login page
      //Then display logout information message in toast
      this.showInfoToast(logoutMessage);
    }
    else if(errorResponse.status == 400 || errorResponse.status == 404){
      this.showErrorToast(errorResponse.error.error.message, 'Error');
    }
    //Put more if-else conditions here, once Yash shares the API responses
    else{
      this.showErrorToast(genericErrorMessage, 'Error');
    }
  }

  showSuccessToast(msg:string, title?: string, config?:any){
    this._toastr.success(msg, title, config);
  }

  showErrorToast(msg:string, title?: string, config?:any){
    this._toastr.error(msg, title, config);
  }

  showWarningToast(msg:string, title?: string, config?:any){
    this._toastr.warning(msg, title, config);
  }

  showInfoToast(msg:string, title?: string, config?:any){
    this._toastr.info(msg, title, config);
  }
}
