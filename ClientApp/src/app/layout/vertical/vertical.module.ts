import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VerticalLayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { SharedModule as SM } from 'src/app/shared/shared.module'



@NgModule({
  declarations: [
    VerticalLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    SM
  ],
  exports: [VerticalLayoutComponent]
})
export class VerticalModule { }
