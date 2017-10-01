import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  exports: [ CommonModule, ReactiveFormsModule ]
})

export class SharedModule { }
