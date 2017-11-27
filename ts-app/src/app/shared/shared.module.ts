import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MdButtonModule} from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MatTabsModule
  ],
  providers: [ ],
  exports: [ CommonModule, ReactiveFormsModule, MdButtonModule, MdCheckboxModule, MatTabsModule, BrowserAnimationsModule ]
})

export class SharedModule { }
