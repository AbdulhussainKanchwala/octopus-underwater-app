import { BatchStatusComponent } from './batch-status.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MtfFileComponent } from './mtf-file/mtf-file.component';

const routes: Routes = [
  {
    path: 'batch-status',
    component: BatchStatusComponent,
    data: { breadcrumb: 'BATCH STATUS', flag: false }
  },
  {
    path: 'mtp-file-status',
    component: MtfFileComponent,
    data: { breadcrumb: 'MTP FILE', flag: false }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchStatusRoutingModule { }
