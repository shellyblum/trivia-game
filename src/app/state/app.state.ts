export const questionFeatureKey = 'question';

export interface IQuestionState {
  questions: Array<any>,
  questionsAmount: number,
  strikes: number,
  score: number
}

export const initialQuestionState: IQuestionState = {
  questions: new Array<any>(),
  questionsAmount: 10,
  strikes: 3,
  score: 0
};
