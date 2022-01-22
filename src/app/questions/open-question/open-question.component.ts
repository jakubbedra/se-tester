import {Component, Input, OnInit} from '@angular/core';
import {OpenQuestion} from "../model/open-question.model";

@Component({
  selector: 'app-open-question',
  templateUrl: './open-question.component.html',
  styleUrls: ['./open-question.component.css']
})
export class OpenQuestionComponent implements OnInit {

  @Input()
  question: OpenQuestion;

  @Input()
  index: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
