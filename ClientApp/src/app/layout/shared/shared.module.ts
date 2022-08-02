import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbCollapseModule, NgbDropdownModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { SimplebarAngularModule } from 'simplebar-angular';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationsComponent } from 'src/app/layout/shared/notifications/notifications.component';

@NgModule({
  declarations: [
    LeftSidebarComponent,
    RightSidebarComponent,
    TopbarComponent,
    FooterComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ClickOutsideModule,
    SimplebarAngularModule,
    NgbAlertModule,
    NgbCollapseModule,
    NgbDropdownModule,
    FontAwesomeModule,
    // NgbDropdownModule,
    NgbProgressbarModule
  ],
  exports: [
    LeftSidebarComponent,
    RightSidebarComponent,
    TopbarComponent,
    FooterComponent
  ]
})
export class SharedModule {}
