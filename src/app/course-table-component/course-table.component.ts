import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-table-component',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  courses = [];
  layout = 'table';
  constructor(private service: CourseServiceClient) { }

  ngOnInit(): void {
    this.service.findAllCourses().then(courses => {
      console.log(courses)
      this.courses = courses;
    });
  }

}
