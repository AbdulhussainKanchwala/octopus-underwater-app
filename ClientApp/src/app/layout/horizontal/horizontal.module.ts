import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HorizontalLayoutComponent } from './layout/layout.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HorizontalLayoutComponent,
    TopnavComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HorizontalLayoutComponent,
    TopnavComponent
  ]
})
export class HorizontalModule { }
