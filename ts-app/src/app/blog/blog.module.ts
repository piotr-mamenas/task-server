import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Module Components
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { PostComponent } from './components/post/post.component';

import 'hammerjs';

@NgModule({
  declarations: [
    MainPanelComponent,
    PostComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  exports: [
    MainPanelComponent,
    PostComponent
  ]
})

export class BlogModule { }
