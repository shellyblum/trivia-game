import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {questionsSelector} from "../../../state/questions.selectors";
import {tap} from "rxjs/operators";
import {QuestionsService} from "../../../services/questions.service";
import * as QuestionActions from "../../../state/questions.actions";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnChanges {

  display: boolean = false;
  questionsAmount: number = 10;
  timeLeft: number = 20;
  interval;
  responsiveOptions;
  questions:Array<any> = ['w','e','r','t','p','s','w','k','v','c'];
  questions$ = this.store.pipe
  (select(questionsSelector))
    .subscribe((val: any) => {
      debugger;
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
    this.store.dispatch(QuestionActions.GetQuestionAction());
    this.confirm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.result && changes.result.currentValue) {
      debugger;
    }
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

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you ready??',
      rejectVisible: false,
      accept: () => {
        this.startTimer();
      }
    });
  }

}
