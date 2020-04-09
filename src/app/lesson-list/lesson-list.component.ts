import { Component, OnInit } from '@angular/core';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  lessons = [];
  courseId = '';
  moduleId = '';
  lessonId = '';
  constructor(private service: LessonServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
    });
    this.service.findLessonsForModule(this.moduleId).then(lessons => this.lessons = lessons);
  }

}
