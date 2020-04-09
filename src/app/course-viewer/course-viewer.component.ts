import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  courseId = '';
  course = {title: 'dummy course', _id: '123'};
  constructor(private service: CourseServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params.cid); this.courseId = params.cid;
    });
    console.log(this.courseId)
    this.service.findCourseById(this.courseId).then(course => {
        console.log(course);
        this.course = course;
      }
    ).then(res => console.log(this.course));
  }

}
