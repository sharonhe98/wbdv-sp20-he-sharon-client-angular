import {Component, Input, OnInit} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false-component',
  templateUrl: './true-false-component.component.html',
  styleUrls: ['./true-false-component.component.css']
})
export class TrueFalseComponentComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
  answer = '';
  grading = false;
  faCheck = faCheck;
  faTimes = faTimes;
  courseId = '';
  quizId = '';

  grade = () => { this.grading = true; };


  constructor() { }

  ngOnInit(): void {
  }

}
