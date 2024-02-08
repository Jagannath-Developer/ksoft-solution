import { RootState } from "../../../context/store";
export const selectAuth = (state:RootState) => state.authReducer;
