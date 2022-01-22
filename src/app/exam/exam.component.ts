import {Component, OnInit, ViewChild} from '@angular/core';
import {ClosedQuestionListComponent} from "../questions/closed-question-list/closed-question-list.component";
import {OpenQuestionListComponent} from "../questions/open-question-list/open-question-list.component";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  @ViewChild(ClosedQuestionListComponent)
  closedQuestionList: ClosedQuestionListComponent;

  @ViewChild(OpenQuestionListComponent)
  openQuestionList: OpenQuestionListComponent;

  submitted: boolean;

  constructor() {
    this.submitted = false;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.submitted === false) {
      this.submitted = true;
      this.closedQuestionList.submitAnswers();
      this.openQuestionList.submitAnswers();
    }
  }

  onReload(): void {
    window.location.reload();
  }

}
