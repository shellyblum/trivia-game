import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Question} from "../../../models/questions.model";
import * as QuestionActions from "../../../state/questions.actions";
import {select, Store} from "@ngrx/store";
import {questionsSelector, strikesSelector} from "../../../state/questions.selectors";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() strikes: number;
  @Input() score: number;

  @Output('gameOver') gameOver: EventEmitter<string> = new EventEmitter<string>();
  @Output('nextPage') nextPage: EventEmitter<string> = new EventEmitter<string>();

  shuffledAnswers: any;
  selectedAnswer: string;
  // strikes: number;
  // strikes$ = this.store.pipe(
  //   select(strikesSelector)
  // );
  // score: number;
  // score$ = this.store.pipe(
  //   select(strikesSelector)
  // );

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    // this.strikes$.subscribe((strikes: number) => {
    //   this.strikes = strikes;
    // });
    // this.score$.subscribe((score: number) => {
    //   this.score = score;
    // });
    if (this.question) {
      let united = this.question.incorrect_answers.concat(this.question.correct_answer);
      this.shuffledAnswers = this.shuffleAnswers(united);
    }
  }

  setSelectedAnswer(answer: string) {
    this.selectedAnswer = answer;
    if (answer === this.question.correct_answer) {
      let score = ++this.score;
      QuestionActions.updateScoreAction({score: score});
    } else {
      let strikes = --this.strikes;
      QuestionActions.updateStrikesAction({strikes: strikes});
    }

    if (this.strikes === 0 && this.selectedAnswer !== this.question.correct_answer) {
      this.gameOver.emit();
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
