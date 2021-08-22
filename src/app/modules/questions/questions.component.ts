import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {questionsSelector} from "../state/questions.selectors";
import {tap} from "rxjs/operators";
import {QuestionsService} from "../services/questions.service";
import * as QuestionActions from "../state/questions.actions";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

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
