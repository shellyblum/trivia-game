import {createSelector, createFeatureSelector, MemoizedSelector} from "@ngrx/store";
import { questionFeatureKey, IAppState } from "./app.state";

export const questionStateSelector: MemoizedSelector<any, IAppState> = createFeatureSelector<IAppState>(questionFeatureKey);
export const questionsSelector = createSelector(questionStateSelector, (state: IAppState) => state?.list);
