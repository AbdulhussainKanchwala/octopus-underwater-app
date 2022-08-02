import { Component, OnInit } from '@angular/core';
import { ToastCustomService } from 'src/app/core/services/toast-custom.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-batch-status',
  templateUrl: './batch-status.component.html',
  styleUrls: ['./batch-status.component.scss']
})
export class BatchStatusComponent implements OnInit {

  constructor(
    private _toastCustomService: ToastCustomService,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    // component initializatoin code will go here
  }

  showSuccess() {
    let title = 'Success';
    let msg = 'This is a success toast with close button and disabled timeout!';
    let config = {
      closeButton: true,
      disableTimeOut: true
    }
    this._toastCustomService.showSuccessToast(msg, title, config);
  }

  showError() {
    let title = 'Error';
    let msg = '<i>This is an error toast with html template and timeout of 10 seconds!</i>';
    let config = {
      timeOut: 10000,
      enableHtml: true
    }
    this._toastCustomService.showErrorToast(msg, title, config);
  }

  showWarning() {
    this._toastCustomService.showWarningToast('This is a simple warning toast with content only!');
  }

  showInfo() {
    this._toastCustomService.showInfoToast('This is a simple info toast without title!');
  }

}
