import { Action } from "redux";
import { AppState, initialState } from "./app.state";

export function reducer(state: AppState = initialState, action: Action): AppState {
  switch (action.type) {
    default:
      return state;
  }
}