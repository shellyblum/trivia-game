import { Question } from '../models/questions.model';

export const questionFeatureKey = 'question';

export interface IAppState {
  list: [{
    question: string,
    correct_answer: string,
    incorrect_answers: [string,string,string]
  }],
  strikes: number
}

export const initialAppState: IAppState = {
  list: [{
    question: '',
    correct_answer: '',
    incorrect_answers: ['', '', '']
  }],
  strikes: 3
};
