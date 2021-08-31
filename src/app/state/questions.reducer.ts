import { createReducer, on } from '@ngrx/store';
import * as QuestionsActions from "./questions.actions";
import {initialQuestionState} from "./app.state";

export const questionsReducer = createReducer(
  initialQuestionState,

  on(QuestionsActions.ResetGameAction, (state, {}) => ({
    ...initialQuestionState
  })),

  on(QuestionsActions.GetQuestionAction, (state, {}) => ({...state})),

  on(QuestionsActions.AddQuestionsAction,
    (state, {questions}) => ({
    ...state,
      questions : [...questions]
  })),

  on(QuestionsActions.RemoveStrikeAction, (state, {}) => ({
    ...state,
    strikes: state.strikes -1
  })),

  on(QuestionsActions.AddScoreAction, (state, {}) => ({
    ...state,
    score: state.score +1
  })),
);
