import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MdButtonModule} from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';

import 'hammerjs';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCheckboxModule,
    MatTabsModule
  ],
  providers: [ ],
  exports: [ CommonModule, ReactiveFormsModule, MdButtonModule, MdCheckboxModule, MatTabsModule ]
})

export class SharedModule { }
