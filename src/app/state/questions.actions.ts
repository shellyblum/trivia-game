import { createAction, props } from '@ngrx/store';
import {Question} from "../models/questions.model";

export const GetQuestionAction = createAction('[Question/API] Get_Question');

export const AddQuestionAction = createAction(
  '[Question List] Add Question',
  props<{ question: Question }>()
);

export const AddQuestionsAction = createAction(
  '[Question List] Add Question',
  props<{ questions: Array<any> }>()
);

export const updateStrikesAction = createAction(
  '[Strikes] Remove Strike',
  props<{ strikes: number}>()
);
