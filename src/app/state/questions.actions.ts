import { createAction, props } from '@ngrx/store';
import {Question} from "../models/questions.model";

export const GetQuestionAction = createAction('[Question/API] Get_Question');

export const AddQuestionsAction = createAction(
  '[Question List] Add Questions',
  props<{ questions: Array<Question> }>()
);

export const removeStrikeAction = createAction(
  '[Strikes] Remove Strike'
);

export const addScoreAction = createAction(
  '[Score] Update Score'
);
