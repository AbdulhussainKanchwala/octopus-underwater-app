import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { SecurityComponent } from './security/security.component';
import { SystemUsersComponent } from './system-users/system-users.component';

const routes: Routes = [
  {path: 'companies', component: CompanyComponent, data: { breadcrumb: 'COMPANIES', flag: true } },
  {path: 'security', component: SecurityComponent, data: { breadcrumb: 'SECURITY', flag: true } },
  {path: 'system-users', component: SystemUsersComponent, data: { breadcrumb: 'SYSTEM USERS', flag: true } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
