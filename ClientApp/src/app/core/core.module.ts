import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './component/loader/loader.component';
import { LoginComponent } from './component/login/login.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
  declarations: [
    LoaderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbProgressbarModule,
    NgProgressModule
  ],
  exports:[
    LoaderComponent
  ]
})
export class CoreModule { }
