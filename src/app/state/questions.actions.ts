import { createAction, props } from '@ngrx/store';
import {Question} from "../models/questions.model";

export const GetQuestionAction = createAction('[Question/API] Get_Question');

export const AddQuestionAction = createAction(
  '[Question List] Add Question',
  props<{ question: Question }>()
);

export const AddQuestionsAction = createAction(
  '[Question List] Add Questions',
  props<{ questions: Array<Question> }>()
);

export const updateStrikesAction = createAction(
  '[Strikes] Remove Strike',
  props<{ strikes: number}>()
);

export const updateScoreAction = createAction(
  '[Score] Update Score',
  props<{ score: number}>()
);
