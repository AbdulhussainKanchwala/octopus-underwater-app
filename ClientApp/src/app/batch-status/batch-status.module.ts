import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BatchStatusRoutingModule } from './batch-status-routing.module';


@NgModule({
  declarations: [],
  imports: [
    BatchStatusRoutingModule,
    HttpClientModule
  ]
})
export class BatchStatusModule { }
