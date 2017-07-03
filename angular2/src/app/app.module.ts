import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserPrebootModule } from 'preboot/browser';

import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

import {CommentsService} from './services/comments.service';
import {PostsService} from './services/posts.service';


// RouterModule.forRoot([
//   {
//     path: 'posts',
//     component: AppComponent
//   },
//   {
//     path: 'post/:id',
//     component: PostDetailComponent
//   }
// ])

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    CommentComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-universal-example'
    }),
    BrowserPrebootModule.replayEvents()
  ],
  providers: [
    CommentsService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
