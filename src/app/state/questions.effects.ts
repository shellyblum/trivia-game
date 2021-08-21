import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import {map, mergeMap, catchError, switchMap, filter, tap, takeUntil, takeWhile, withLatestFrom} from 'rxjs/operators';
import { QuestionsService } from '../services/questions.service';
import * as QuestionsActions from "./questions.actions";
import {Question} from "../question-list/questions.model";
import {Store} from "@ngrx/store";
import {questionsSelector} from "./questions.selectors";

@Injectable({
  providedIn: 'root'
})

export class AppEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<any>,
    private questionsService: QuestionsService
  ) {}

  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionsActions.GetQuestionAction),
      withLatestFrom(this.store$.select(questionsSelector)),

      // tap(() => this.questionsService.getQuestion()),
      // takeWhile((question: any, index: number) => index > 10),
      switchMap(([questions]) =>
        this.questionsService.getQuestion()
          .pipe(
            filter(result => Boolean(result)),
            mergeMap((data:any) => {
              if (data && data.response_code === 0 && data.results[0]) {
                let currentQuestions = questions;
                return [QuestionsActions.GetQuestionsSuccess(data.results[0])];
              }
              debugger;
              // const questionList: Question[] =
              //   data.filter(question => question.IsSystem === false)
              //     .sort((a, b) => a.LookupName.localeCompare(b.LookupName));
            }),
            // catchError(error => of(QuestionsActions.loginFailedAction({loginErrorMessage: new Error('Error - ' + error.toString())})))
          )
      )
    )
  );

}
