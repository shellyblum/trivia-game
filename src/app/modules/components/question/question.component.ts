import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../../models/questions.model";
import * as QuestionActions from "../../../state/questions.actions";
import {Store} from "@ngrx/store";
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() questionNum: number;

  @Output('gameOver') gameOver: EventEmitter<string> = new EventEmitter<string>();
  @Output('nextPage') nextPage: EventEmitter<string> = new EventEmitter<string>();

  shuffledAnswers: any;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    if (this.question) {
      let united = this.question.incorrect_answers.concat(this.question.correct_answer);
      this.shuffledAnswers = this.shuffleAnswers(united);
    }
  }

  setSelectedAnswer(answer: string) {
    if (answer === this.question.correct_answer) {
      this.store.dispatch(QuestionActions.AddScoreAction());
    } else {
      this.store.dispatch(QuestionActions.RemoveStrikeAction());
    }
    this.nextPage.emit();
  }

  shuffleAnswers(answers: any) {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  }

}
