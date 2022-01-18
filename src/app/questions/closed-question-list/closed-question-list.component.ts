import { Component, OnInit } from '@angular/core';
import {QuestionsRepositoryMock} from "../../injectable/questions-repository-mock";
import {ClosedQuestion} from "../model/closed-question.model";

@Component({
  selector: 'app-closed-question-list',
  templateUrl: './closed-question-list.component.html',
  styleUrls: ['./closed-question-list.component.css']
})
export class ClosedQuestionListComponent implements OnInit {

  questions: ClosedQuestion[];

  constructor(
    private questionsRepository: QuestionsRepositoryMock
  ) {
    this.questions = [];
  }

  ngOnInit(): void {
    this.questions = this.questionsRepository.getRandomClosedQuestions(10);
  }

}
