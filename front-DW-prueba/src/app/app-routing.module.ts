import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ViewFacturacionComponent} from './pages/view-facturacion/view-facturacion.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { ViewProductoComponent } from './pages/view-producto/view-producto.component';
import { ViewInventarioComponent } from './pages/view-inventario/view-inventario.component';


//import { ViewClienteComponent } from './pages/views/view-cliente/view-cliente.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
   {
     path: 'view-factura',
     component: ViewFacturacionComponent,
     canActivate: [ AuthGuardService ]
   },
   {
    path: 'view-inventario',
    component: ViewInventarioComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'view-producto',
    component: ViewProductoComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    ViewFacturacionComponent,
    ViewInventarioComponent,
    ViewProductoComponent
    
  ]
})
export class AppRoutingModule { }
