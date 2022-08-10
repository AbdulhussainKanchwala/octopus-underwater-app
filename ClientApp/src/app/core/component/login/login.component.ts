import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoggedInUserService } from '../../services/logged-in-user/logged-in-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _loggedInUserService: LoggedInUserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      //Check if identity token is present in URL or not
      this._activatedRoute.queryParams.subscribe(params => {
        //If token is available
        if(params['token']){
          //Store details to local storage and consider that login is finalized
          this._loggedInUserService.setUser(params['token']);
          //Redirect users to the dashboard page
          this._router.navigate(['batches/batch-status']);
        }
        else{
          //Check if user is not logged In by checking the localstorage 
          if(!this._loggedInUserService.getUser()){
            //Redirect users to the webUI project
            window.location.href = environment.SSOlogin;
          }
          else{
            this._router.navigate(['batches/batch-status']);
          }
        }
      });
    }); 
  }

}
