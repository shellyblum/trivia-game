import {createSelector, createFeatureSelector, MemoizedSelector} from "@ngrx/store";
import { questionFeatureKey, IAppState } from "./app.state";

export const questionStateSelector: MemoizedSelector<any, IAppState> = createFeatureSelector<IAppState>(questionFeatureKey);

export const questionsSelector = createSelector(questionStateSelector, (state: IAppState) => state.questions);
export const questionsAmountSelector = createSelector(questionStateSelector, (state: IAppState) => state.questionsAmount);
export const strikesSelector = createSelector(questionStateSelector, (state: IAppState) => state.strikes);
export const scoreSelector = createSelector(questionStateSelector, (state: IAppState) => state.score);
