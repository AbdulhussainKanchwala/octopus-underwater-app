import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { AgGridCustomComponent } from './ag-grid-custom/ag-grid-custom.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HelpComponent } from './help/help.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // PageTitleComponent,
    // PreloaderComponent,
    ErrorComponent,
    AgGridCustomComponent,
    HelpComponent,
    BreadcrumbsComponent,
    PdfviewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgGridModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    PdfViewerModule
  ],
  exports: [
    AgGridCustomComponent,
    FormsModule,
    NgbModule,
    CommonModule,
    ErrorComponent,
    HelpComponent,
    PdfviewerComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
