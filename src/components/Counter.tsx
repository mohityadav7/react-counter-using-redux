import * as React from 'react';
import { connect } from 'react-redux';
import { decrement, increment, reset } from '../store/actionCreators';
import { Dispatch, RootState } from '../store/store';

interface Props {
  count: number;
  dispatch: Dispatch;
}

const Counter = (props: Props) => {
  return (
    <div>
      <div className='count-container'>{props.count}</div>
      <div>
        <button onClick={() => props.dispatch(decrement(1))}>Minus 1</button>
        <button onClick={() => props.dispatch(increment(1))}>Plus 1</button>
        <button onClick={() => props.dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Counter);
