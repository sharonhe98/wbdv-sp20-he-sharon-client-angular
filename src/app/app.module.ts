import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import {FormsModule} from '@angular/forms';
import {CourseServiceClient} from './services/course.service.client';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  {path: '/', component: CourseListComponent},
  {path: 'course/:cid', component: CourseViewerComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    CourseServiceClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
