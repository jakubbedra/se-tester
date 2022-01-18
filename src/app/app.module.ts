import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenQuestionListComponent } from './questions/open-question-list/open-question-list.component';
import { ClosedQuestionListComponent } from './questions/closed-question-list/closed-question-list.component';
import {QuestionsRepositoryMock} from "./injectable/questions-repository-mock";
import { OpenQuestionComponent } from './questions/open-question/open-question.component';
import { ClosedQuestionComponent } from './questions/closed-question/closed-question.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenQuestionListComponent,
    ClosedQuestionListComponent,
    OpenQuestionComponent,
    ClosedQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    QuestionsRepositoryMock
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
