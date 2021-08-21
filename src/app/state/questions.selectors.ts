import {createSelector, createFeatureSelector, MemoizedSelector} from "@ngrx/store";
import { questionFeatureKey, AppState } from "./app.state";

export const questionStateSelector: MemoizedSelector<any, AppState> = createFeatureSelector<AppState>(questionFeatureKey);
export const questionsSelector = createSelector(questionStateSelector, (state: AppState) => state?.list);
