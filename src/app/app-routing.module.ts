import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {NotFound404Component} from './not-found404/not-found404.component';
import {MiniwordComponent} from './directives/miniword/miniword.component';
import {CvDetailComponent} from './cv/cv-detail/cv-detail.component';

const routes: Routes = [
  {path: 'cv', children: [
      {path: '', component: CvComponent},
      {path: ':id', component: CvDetailComponent},
    ]},
  {path: 'todo', component: TodoComponent},
  {path: 'word', component: MiniwordComponent},
  {path: '**', component: NotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
