import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {NgModule} from '@angular/core';
import {CourseTableComponent} from './course-table-component/course-table.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  {path: '', component: CourseListComponent},
  {path: ':layout/courses', component: CourseTableComponent},
  {path: 'course-viewer/:cid/modules', component: CourseViewerComponent},
  {path: 'course-viewer/:cid/modules/:moduleId/lessons', component: CourseViewerComponent},
  {path: 'course-viewer/:cid/modules/:moduleId/lessons/:lessonId/topics', component: CourseViewerComponent},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  { path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
