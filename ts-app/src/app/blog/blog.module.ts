import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Module Components
import { BlogMainPanelComponent } from './components/main-panel/blog-main-panel.component';
import { BlogRightPanelComponent } from './components/right-panel/blog-right-panel.component';
import { BlogPostComponent } from './components/post/blog-post.component';

import 'hammerjs';

@NgModule({
  declarations: [
    BlogMainPanelComponent,
    BlogRightPanelComponent,
    BlogPostComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
  ],
  exports: [
    BlogMainPanelComponent,
    BlogRightPanelComponent,
    BlogPostComponent
  ]
})

export class BlogModule { }
