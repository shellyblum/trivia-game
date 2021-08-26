import {createSelector, createFeatureSelector, MemoizedSelector} from "@ngrx/store";
import { questionFeatureKey, IQuestionState } from "./app.state";

export const questionStateSelector: MemoizedSelector<any, IQuestionState> = createFeatureSelector<IQuestionState>(questionFeatureKey);

export const questionsSelector = createSelector(questionStateSelector, (state: IQuestionState) => state.questions);
export const questionsAmountSelector = createSelector(questionStateSelector, (state: IQuestionState) => state.questionsAmount);
export const strikesSelector = createSelector(questionStateSelector, (state: IQuestionState) => state.strikes);
export const scoreSelector = createSelector(questionStateSelector, (state: IQuestionState) => state.score);
