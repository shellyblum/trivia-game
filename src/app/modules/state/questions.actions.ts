import { createAction, props } from '@ngrx/store';
import {Question} from "../models/questions.model";

export const GetQuestionAction = createAction('[Question/API] Get_Question');

export const GetQuestionsSuccess = createAction('[Question/API] Get_Question_Success', props<{question: Question}>());

// export const getQuestion = createAction(
//   '[Question List/API] Get Question Success',
//   props<{ Question }>()
// );

export const AddQuestionAction = createAction(
  '[Question List] Add Question',
  props<{ question: Question }>()
);

// export const removeQuestion = createAction(
//   '[Question Collection] Remove Question',
//   props<{ questionId }>()
// );
