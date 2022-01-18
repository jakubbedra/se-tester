import { Component, OnInit } from '@angular/core';
import {QuestionsRepositoryMock} from "../../injectable/questions-repository-mock";
import {ClosedQuestion} from "../model/closed-question.model";

@Component({
  selector: 'app-closed-question',
  templateUrl: './closed-question.component.html',
  styleUrls: ['./closed-question.component.css']
})
export class ClosedQuestionComponent implements OnInit {

  question: ClosedQuestion;

  constructor(
    //(move to list component) private questionsRepository: QuestionsRepositoryMock
    question: ClosedQuestion
  ) {
    this.question = question;
  }

  ngOnInit(): void {
  }

  public onSelect(selected: number): void {
    this.question.selected = selected;
  }

}
