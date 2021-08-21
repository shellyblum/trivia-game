import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';

import {QuestionsService} from "./services/questions.service";

import {questionsSelector} from "./state/questions.selectors";
import * as QuestionActions from "./state/questions.actions";
import {Question} from "./question-list/questions.model";
import {filter, tap} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  timeLeft: number = 20;
  interval;
  responsiveOptions;
  questions = ['w','e','t'];
  questions$ = this.store.pipe(
    select(questionsSelector),
    tap((value: any) => {
      debugger;
    })).subscribe((val: any) => {
      debugger;
  });

  constructor(private store: Store<any>,
              private questionsService: QuestionsService) {
    // this.questions$.subscribe((val: any) => {
    //   let valddd = val;
    //   debugger;
    // });

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

    this.store.dispatch(QuestionActions.GetQuestionAction());

  }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 20;
      }
    },1000)
  }

}
