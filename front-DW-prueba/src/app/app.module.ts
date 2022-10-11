import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// import { ViewClienteComponent } from './pages/views/view-cliente/view-cliente.component';
// import { ViewFacturacionComponent } from './pages/views/view-facturacion/view-facturacion.component';
// import { ViewProductoComponent } from './pages/views/view-producto/view-producto.component';
// import { ViewInventarioComponent } from './pages/views/view-inventario/view-inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    // ViewClienteComponent,
    // ViewFacturacionComponent,
    // ViewProductoComponent,
    // ViewInventarioComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    HttpClientModule
  // TasksComponent,
    // ViewFacturacionComponent,
    // ViewInventarioComponent,
    // ViewProductoComponent
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
