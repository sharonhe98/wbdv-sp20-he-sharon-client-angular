import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findModulesForCourseId = (courseId) => fetch(`http://wbdv-generic-server.herokuapp.com/api/001694524/courses/${courseId}/modules`)
    .then(response => response.json())
