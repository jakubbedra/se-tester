import {Component, OnInit} from '@angular/core';
import {QuestionsRepositoryMock} from "../../injectable/questions-repository-mock";
import {ClosedQuestion} from "../model/closed-question.model";

@Component({
  selector: 'app-closed-question-list',
  templateUrl: './closed-question-list.component.html',
  styleUrls: ['./closed-question-list.component.css']
})
export class ClosedQuestionListComponent implements OnInit {

  questions: ClosedQuestion[];
  submitted: boolean;

  constructor(
    private questionsRepository: QuestionsRepositoryMock
  ) {
    this.questions = [];
    this.submitted = false;
  }

  ngOnInit(): void {
    this.questions = this.questionsRepository.getRandomClosedQuestions(10);
  }

  submitAnswers(): void {
    this.calculateClosedQuestionsScore();
    this.submitted = true;
  }

  calculateClosedQuestionsScore(): number {
    let ret = 0;
    this.questions.forEach(q => {
      if (q.selected === q.correctAnswer) {
        ret++;
      }
    });
    console.log('dupa: ' + ret);
    return ret;
  }

}
