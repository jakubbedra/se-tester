export class OpenQuestion {
  public content: string;
  public correctAnswer: string;
  public givenAnswer: string;

  constructor(content: string, correctAnswer: string) {
    this.content = content;
    this.correctAnswer = correctAnswer;
    this.givenAnswer = "";
  }

}
