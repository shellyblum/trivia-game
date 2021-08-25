import {createSelector, createFeatureSelector, MemoizedSelector} from "@ngrx/store";
import { questionFeatureKey, State } from "./app.state";

export const questionStateSelector: MemoizedSelector<any, State> = createFeatureSelector<State>(questionFeatureKey);

export const questionsSelector = createSelector(questionStateSelector, (state: State) => state.questions);
export const questionsAmountSelector = createSelector(questionStateSelector, (state: State) => state.questionsAmount);
export const strikesSelector = createSelector(questionStateSelector, (state: State) => state.strikes);
