import actionTypes from './actionTypes';
import {
  IncrementAction,
  DecrementAction,
  ResetAction,
} from './actionCreators';

interface CountState {
  count: number;
}

const initialState = {
  count: 0,
};

export type Action = IncrementAction | DecrementAction | ResetAction;

const countReducer = (state = initialState, action: Action): CountState => {
  switch (action.type) {
    case actionTypes.increment:
      return { count: state.count + action.payload };

    case actionTypes.decrement:
      return { count: state.count - action.payload };

    case actionTypes.reset:
      return { count: 0 };

    default:
      return state;
  }
};

export default countReducer;
