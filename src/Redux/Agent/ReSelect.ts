import { createSelector } from "reselect";
import { IRootState } from "../rootReducer";



const selectAuthReducer = (store: IRootState) => store.auth;

export const selectAuth = createSelector([selectAuthReducer], (auth) => auth);
