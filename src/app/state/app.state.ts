import { Question } from '../models/questions.model';

export const questionFeatureKey = 'question';

export interface State {
  questions: Array<any>,
  strikes: number,
  questionsAmount: number
}

export const initialAppState: State = {
  questions: new Array<any>(),
  strikes: 3,
  questionsAmount: 10
};
