import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Module Components
import { MainPanel } from './components/main-panel/main-panel.component';

import 'hammerjs';

@NgModule({
  declarations: [
    MainPanel
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  exports: [
    MainPanel
  ]
})

export class BlogModule { }
