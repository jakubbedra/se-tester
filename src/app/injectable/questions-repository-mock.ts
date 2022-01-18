import {Injectable} from "@angular/core";
import {ClosedQuestion} from "../questions/model/closed-question.model";

@Injectable()
export class QuestionsRepositoryMock {

  closedQuestions: ClosedQuestion[] = [
    {"content": "sampleContent1", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent2", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 3, "selected": -1},
    {"content": "sampleContent3", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 0, "selected": -1},
    {"content": "sampleContent4", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent1", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent2", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent3", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 0, "selected": -1},
    {"content": "sampleContent4", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 3, "selected": -1},
    {"content": "sampleContent1", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent2", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent3", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 0, "selected": -1},
    {"content": "sampleContent4", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 3, "selected": -1},
    {"content": "sampleContent1", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent2", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 0, "selected": -1},
    {"content": "sampleContent3", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 0, "selected": -1},
    {"content": "sampleContent4", "answers": ["answ1", "answ2", "answ1", "answ2"], "correctAnswer": 2, "selected": -1}
  ];

  constructor() {
  }

  public getRandomClosedQuestions(amount: number): ClosedQuestion[] {
    let ret: ClosedQuestion[] = [];
    let tmp: ClosedQuestion[] = [];
    for (let q of this.closedQuestions) {
      tmp.push(q);
    }
    for (let i = 0; i < amount; i++) {
      let ind = Math.floor(Math.random() * amount);
      ret.push(tmp[ind]);
      tmp.splice(ind, 1);
    }
    return ret;
  }

}
