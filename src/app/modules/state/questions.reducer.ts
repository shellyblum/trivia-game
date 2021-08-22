import { createReducer, on, Action } from '@ngrx/store';

import { Question } from '../models/questions.model';
import * as QuestionsActions from "./questions.actions";
import {initialAppState} from "./app.state";

export const questionsReducer = createReducer(
  initialAppState,

  on(QuestionsActions.GetQuestionAction, (state, {}) => state),

  on(QuestionsActions.GetQuestionsSuccess, (state, {question}) => {
    let current = [...state.list];
    debugger;
    // if (state.indexOf(question.question) > -1) return state;
    return state;
  }),

  // on(removeQuestion, (state, { questionId }) => {
  //   if (state.indexOf(questionId) > -1) return state;
  //   return [...state, questionId];
  // })
);
