import { createReducer, on, Action } from '@ngrx/store';
import { Question } from '../models/questions.model';
import * as QuestionsActions from "./questions.actions";
import {initialAppState} from "./app.state";

export const questionsReducer = createReducer(
  initialAppState,

  on(QuestionsActions.GetQuestionAction, (state, {}) => ({...state})),

  on(QuestionsActions.AddQuestionsAction,
    (state, {questions}) => ({
    ...state,
      questions : [...questions]
  })),

  on(QuestionsActions.updateStrikesAction, (state, {strikes}) => ({
    ...state,
    strikes: strikes
  }))
);
