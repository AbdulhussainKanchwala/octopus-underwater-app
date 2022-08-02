import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/AuthGuard/auth.guard';
import { LoginComponent } from './core/component/login/login.component';
import { LayoutContainerComponent } from './layout/layout-container.component';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutContainerComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'batches', loadChildren: () => import( `./batch-status/batch-status.module`).then(m => m.BatchStatusModule)},
      {path: 'company', loadChildren: () => import( `./company/company.module`).then(m => m.CompanyModule)},
    ]
  },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
