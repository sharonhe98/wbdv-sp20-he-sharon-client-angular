import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {NgModule} from '@angular/core';
import {CourseTableComponent} from './course-table-component/course-table-component.component';

const routes: Routes = [
  {path: '', component: CourseListComponent},
  {path: ':layout/courses', component: CourseTableComponent},
  {path: ':layout/courses/:cid/modules', component: CourseViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
