// Angular Libs
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Module Components
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import 'hammerjs';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [ ],
  exports: [ ]
})

export class CoreModule { }
