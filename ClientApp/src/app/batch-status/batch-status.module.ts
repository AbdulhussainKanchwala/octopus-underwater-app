import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { BatchStatusRoutingModule } from './batch-status-routing.module';
import { MtfFileComponent } from './mtf-file/mtf-file.component';
import { BatchStatusComponent } from './batch-status.component';


@NgModule({
  declarations: [
    MtfFileComponent,
    BatchStatusComponent
  ],
  imports: [
    BatchStatusRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class BatchStatusModule { }
