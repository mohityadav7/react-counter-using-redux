/**
 * This is similar to Counter component but instead of using dispatching actions
 * directly, it uses mapDispatchToProps to map dispatcher functions to props
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../store/actionCreators';
import { Action } from '../store/countReducer';
import { Dispatch, RootState } from '../store/store';

interface Props {
  count: number;
  incrementCount: (change: number) => Action;
  decrementCount: (change: number) => Action;
  reset: () => Action;
}

const Counter2: React.FC<Props> = (props: Props): React.ReactElement => {
  return (
    <div>
      <div className='small-counter'>Count from Counter2: {props.count}</div>
      <button onClick={() => props.decrementCount(2)}>Minus 2</button>
      <button onClick={() => props.incrementCount(2)}>Plus 2</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    incrementCount: (change: number) => dispatch(increment(change)),
    decrementCount: (change: number) => dispatch(decrement(change)),
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
