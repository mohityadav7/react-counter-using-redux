import actionTypes from './actionTypes';

export interface IncrementAction {
  type: actionTypes.increment;
  payload: number;
}

export interface DecrementAction {
  type: actionTypes.decrement;
  payload: number;
}

export interface ResetAction {
  type: actionTypes.reset;
}

export function increment(change: number): IncrementAction {
  return {
    type: actionTypes.increment,
    payload: change,
  };
}

export function decrement(change: number): DecrementAction {
  return {
    type: actionTypes.decrement,
    payload: change,
  };
}

export function reset(): ResetAction {
  return {
    type: actionTypes.reset,
  };
}
