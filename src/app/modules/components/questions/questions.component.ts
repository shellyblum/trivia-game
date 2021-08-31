import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {questionsSelector, scoreSelector, strikesSelector} from "../../../state/questions.selectors";
import {QuestionsService} from "../../../services/questions.service";
import * as QuestionActions from "../../../state/questions.actions";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  display: boolean = false;
  timeLeft: number = 20;
  isGameOver: boolean = false;
  interval;
  responsiveOptions;
  pageIndex = 0;
  questions$ = this.store.pipe(select(questionsSelector));
  strikes: number;
  strikes$ = this.store.pipe(
    select(strikesSelector))
    .subscribe((strikes: number) => {
    this.strikes = strikes;
    if (strikes === 0) {
      this.gameOver();
    }
  });
  score: number;
  score$ = this.store.pipe(
    select(scoreSelector))
    .subscribe((score: number) => {
      this.score = score;
  });

  constructor(private store: Store<any>,
              private questionsService: QuestionsService,
              private confirmationService: ConfirmationService) {

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.store.dispatch(QuestionActions.ResetGameAction());
    this.store.dispatch(QuestionActions.GetQuestionAction());
    this.isGameOver = false;
    this.pageIndex = 0;
    this.timeLeft = 20
    this.confirm();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.nextPageEmitted();
        this.store.dispatch(QuestionActions.RemoveStrikeAction());
        this.timeLeft = 20;
      }
    },1000)
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you ready??',
      rejectVisible: false,
      accept: () => {
        this.questions$.subscribe((res: any) => {
          if (res && res.length > 0) {
            clearInterval(this.interval);
            this.startTimer();
          }
        })
      }
    });
  }

  gameOver() {
    this.isGameOver = true;
    clearInterval(this.interval);
  }

  nextPageEmitted() {
    if(this.pageIndex < 10 && this.strikes > 0) {
      ++this.pageIndex;
      clearInterval(this.interval);
      this.timeLeft = 20;
      this.startTimer();
    } else {
      this.gameOver()
    }
  }

}
