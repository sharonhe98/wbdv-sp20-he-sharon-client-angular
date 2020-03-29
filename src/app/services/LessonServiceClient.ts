import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = (moduleId) => fetch(`http://wbdv-generic-server.herokuapp.com/api/001694524/modules/${moduleId}`)
    .then(response => response.json())
}
