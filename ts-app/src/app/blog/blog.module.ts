import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Module Components
import { MainPanelComponent } from './components/main-panel/main-panel.component';

import 'hammerjs';

@NgModule({
  declarations: [
    MainPanelComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  exports: [
    MainPanelComponent
  ]
})

export class BlogModule { }
