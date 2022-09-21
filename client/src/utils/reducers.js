import { useReducer } from "react";
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        cards: [...action.cards],
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        majors: [...action.majors],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentMajor: action.currentMajor
      }

    default:
      return state;
  }
};

export function useCardReducer(initialState) {
  return useReducer(reducer, initialState)
}