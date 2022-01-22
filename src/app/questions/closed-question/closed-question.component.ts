import {Component, Input, OnInit} from '@angular/core';
import {ClosedQuestion} from "../model/closed-question.model";

@Component({
  selector: 'app-closed-question',
  templateUrl: './closed-question.component.html',
  styleUrls: ['./closed-question.component.css']
})
export class ClosedQuestionComponent implements OnInit {

  @Input()
  question: ClosedQuestion;

  @Input()
  index: number;

  submitted: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.mixQuestion();
  }

  private mixQuestion(): void {
    console.log(this.question);
    let correctAnswerString = this.question.answers[this.question.correctAnswer];
    let answersStrings = [];
    this.question.answers.forEach(a => answersStrings.push(a));
    this.question.answers.splice(0, this.question.answers.length);
    let correctAnswerNewInd = 0;
    let totalAnswers = answersStrings.length;
    for (let i = 0; i < totalAnswers; i++) {
      let ind = Math.floor(Math.random() * answersStrings.length);
      if (answersStrings[ind] === correctAnswerString) {
        correctAnswerNewInd = i;
      }
      this.question.answers.push(answersStrings[ind]);
      answersStrings.splice(ind, 1);
    }
    this.question.correctAnswer = correctAnswerNewInd;
    console.log(this.question);
  }

  public onSelectAnswer(selected: number): void {
    this.question.selected = selected;
  }

  public wasRightAnswerSelected(): boolean {
    return this.question.selected === this.question.correctAnswer;
  }

}
