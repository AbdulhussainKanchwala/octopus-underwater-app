import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company/company.component';
import { SecurityComponent } from './security/security.component';
import { SystemUsersComponent } from './system-users/system-users.component';

@NgModule({
  declarations: [
    CompanyComponent,
    SystemUsersComponent,
    SecurityComponent
  ],
  imports: [
    CompanyRoutingModule,
    SharedModule
  ]
})
export class CompanyModule { }
