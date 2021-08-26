import { Question } from '../models/questions.model';

export const questionFeatureKey = 'question';

export interface IAppState {
  questions: Array<any>,
  questionsAmount: number,
  strikes: number,
  score: number
}

export const initialAppState: IAppState = {
  questions: new Array<any>(),
  questionsAmount: 10,
  strikes: 3,
  score: 0
};
