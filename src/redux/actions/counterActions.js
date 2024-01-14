import * as actionTypes from "./actionTypes";

export const incraseCounter = () => ({
  type: actionTypes.INCRASE_COUNTER,
  payload: 1,
});

export const decraseCounter = () => ({
  type: actionTypes.DECRASE_COUNTER,
  payload: 1,
});

export const incraseByTwoCounter = () => ({
  type: actionTypes.INCRASE_BY_TWO_COUNTER,
  payload: 2,
});
