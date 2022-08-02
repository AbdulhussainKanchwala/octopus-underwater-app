import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { AgGridCustomComponent } from './ag-grid-custom/ag-grid-custom.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    // PageTitleComponent,
    // PreloaderComponent,
    ErrorComponent,
    AgGridCustomComponent
  ],
  imports: [
    CommonModule,
    // RouterModule,
    AgGridModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  exports: [
    AgGridCustomComponent,
    FormsModule,
    NgbModule,
    CommonModule,
    HttpClientModule,ErrorComponent
  ]
})
export class SharedModule { }
