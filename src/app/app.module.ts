import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import {FormsModule} from '@angular/forms';
import {CourseServiceClient} from './services/CourseServiceClient';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseTableComponent } from './course-table-component/course-table.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import {QuizServiceClient} from './services/QuizServiceClient';
import { QuizComponent } from './quiz/quiz.component';
import {QuestionServiceClient} from './services/QuestionServiceClient';
import { TrueFalseComponentComponent } from './true-false-component/true-false-component.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponent,
    CourseTableComponent,
    ModuleListComponent,
    LessonListComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseComponentComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    QuizServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
