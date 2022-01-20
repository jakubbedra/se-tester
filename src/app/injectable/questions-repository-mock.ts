import {Injectable} from "@angular/core";
import {ClosedQuestion} from "../questions/model/closed-question.model";

@Injectable()
export class QuestionsRepositoryMock {

  closedQuestions: ClosedQuestion[] = [
    {"content": "sampleContent1", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent2", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 3, "selected": -1},
    {"content": "sampleContent3", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 0, "selected": -1},
    {"content": "sampleContent4", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent5", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent6", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent7", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 0, "selected": -1},
    {"content": "sampleContent8", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 3, "selected": -1},
    {"content": "sampleContent9", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent10", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent11", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 0, "selected": -1},
    {"content": "sampleContent12", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 3, "selected": -1},
    {"content": "sampleContent13", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 1, "selected": -1},
    {"content": "sampleContent14", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 0, "selected": -1},
    {"content": "sampleContent15", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 0, "selected": -1},
    {"content": "sampleContent16", "answers": ["answ1", "answ2", "answ3", "answ4"], "correctAnswer": 2, "selected": -1}
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
      let ind = Math.floor(Math.random() * tmp.length);
      ret.push(tmp[ind]);
      tmp.splice(ind, 1);
    }
    return ret;
  }

}
