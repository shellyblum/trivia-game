import { createReducer, on } from '@ngrx/store';
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

  on(QuestionsActions.removeStrikeAction, (state, {}) => ({
    ...state,
    strikes: state.strikes -1
  })),

  on(QuestionsActions.addScoreAction, (state, {}) => ({
    ...state,
    score: state.score +1
  })),
);
