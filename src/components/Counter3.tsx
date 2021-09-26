/**
 * Implement counter using redux hooks
 */

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../store/actionCreators';
import { RootState } from '../store/store';

const Counter3 = (): React.ReactElement => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.count);

  return (
    <div>
      <div className='small-counter'>Count from Counter3: {count}</div>
      <button onClick={() => dispatch(decrement(3))}>Minus 3</button>
      <button onClick={() => dispatch(increment(3))}>Plus 3</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter3;
