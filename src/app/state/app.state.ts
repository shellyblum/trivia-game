import { Question } from '../question-list/questions.model';

export const questionFeatureKey = 'question';

export interface AppState {
  list: [{
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: [string,string,string]
  }]
}

export const initialAppState: AppState = {
  list: [{
    category: '',
    type: '',
    difficulty: '',
    question: '',
    correct_answer: '',
    incorrect_answers: ['', '', '']
  }]
};
