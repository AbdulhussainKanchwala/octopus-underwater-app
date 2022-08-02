import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { SecurityComponent } from './security/security.component';
import { SystemUsersComponent } from './system-users/system-users.component';

const routes: Routes = [
  {path: 'companies', component: CompanyComponent },
  {path: 'security', component: SecurityComponent },
  {path: 'system-users', component: SystemUsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
