import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  errorMessages:any = {
    'UnprocessableEntity': {heading: 'Unprocessable Entity', message: "Server is unable to process the request.<br/>Typically, this happens because there's a semantic error somewhere in the request."},
    'Unauthorized': {heading: 'Unauthorized Access', message: 'Cannot validate the token.<br/>Looks like the login token is inavalid'},
    'BadRequest': {heading: 'Bad Request', message: 'Server is unable to understand the request.'},
    'Generic': {heading: 'Something went wrong', message: 'We apoligise and are fixing the problem.<br/>Please try again at a later stage.'}
  };
  displayError:string = this.errorMessages.Generic.message;
  displayHeading:string = this.errorMessages.Generic.heading;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    

    setTimeout(() => {
      //Check if error paramenter is present in URL or not
      this._activatedRoute.queryParams.subscribe(params => {
        //If error is available
        if(params['type']){
          //Pick the correct message based on the status code
          this.displayHeading = this.errorMessages[params['type']]['heading'];
          this.displayError = this.errorMessages[params['type']]['message'];
        }
        else{
          this.displayHeading = this.errorMessages.Generic.heading;
          this.displayError = this.errorMessages.Generic.message;
        }
      });
   }); 
  }

}
