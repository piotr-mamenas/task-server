// Angular Libs
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Module Components
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import 'hammerjs';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    SharedModule
  ],
  providers: [ ],
  exports: [
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    NavbarComponent
  ]
})

export class CoreModule { }
