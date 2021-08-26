import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {combineLatest, Observable} from 'rxjs';
import {
  map,
  switchMap,
  withLatestFrom
} from 'rxjs/operators';
import { QuestionsService } from '../services/questions.service';
import * as QuestionsActions from "./questions.actions";
import {Question} from "../models/questions.model";
import {Store} from "@ngrx/store";
import {questionsAmountSelector, questionsSelector} from "./questions.selectors";

@Injectable({
  providedIn: 'root'
})

export class AppEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<any>,
    private questionsService: QuestionsService
  ) {}

  getQuestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuestionsActions.GetQuestionAction),
      withLatestFrom(this.store$.select(questionsSelector), this.store$.select(questionsAmountSelector)),
      switchMap(([{}, list, questionsAmount]) => {
        let observables: Array<Observable<any>> = [];
        for (let i = 0; i < questionsAmount - Object.values(list).length; ++i) {
          observables.push(this.questionsService.getQuestion());
        }
        return combineLatest(observables)
      }),
      map( (res: any) => {
        let mapList: Object = {};
        res.forEach((q: any) => {
          mapList[q.results[0].question] = {
            question: atob(q.results[0].question),
            correct_answer: atob(q.results[0].correct_answer),
            incorrect_answers: [atob(q.results[0].incorrect_answers[0]), atob(q.results[0].incorrect_answers[1]), atob(q.results[0].incorrect_answers[2])]
          };
        });
        let uniqQ: Question[] = Object.values(mapList);
        return QuestionsActions.AddQuestionsAction({questions: uniqQ});
      })
    );
  });

}
