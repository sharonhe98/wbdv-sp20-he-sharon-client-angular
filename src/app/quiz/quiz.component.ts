import { Component, OnInit } from '@angular/core';
import {QuestionServiceClient} from '../services/QuestionServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  courseId = '';
  quizId = '';
  questions = [];
  constructor(private service: QuestionServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.quizId = params.quizId;

      this.service.findQuestionsForQuiz(params.quizId).then(questions => this.questions = questions);
    });
  }

}
