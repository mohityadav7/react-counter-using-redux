/**
 * Counter implementation using useReducer simplified
 */

import React from 'react';
import { useReducer } from 'react';

type Action = { type: string; payload?: number };

const Counter4: React.FC = (): React.ReactElement => {
  const reducer = (count: number, action: Action): number => {
    switch (action.type) {
      case 'INCREMENT':
        return count + (action.payload || 0);
      case 'DECREMENT':
        return count - (action.payload || 0);
      case 'RESET':
        return 0;
      default:
        return 0;
    }
  };

  const [count, countDispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div className='count-container'>{count}</div>
      <div>
        <button
          onClick={() => countDispatch({ type: 'DECREMENT', payload: 4 })}
        >
          Minus 4
        </button>
        <button
          onClick={() => countDispatch({ type: 'INCREMENT', payload: 4 })}
        >
          Plus 4
        </button>
        <button onClick={() => countDispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </div>
  );
};

export default Counter4;

// /**
//  * Counter implementation using useReducer
//  */

// import React from 'react';
// import { useReducer } from 'react';

// type State = number;

// enum actionType {
//   increment = 'INCREMENT',
//   decrement = 'DECREMENT',
//   reset = 'RESET',
// }

// type Action =
//   | { type: actionType.increment; payload: number }
//   | { type: actionType.decrement; payload: number }
//   | { type: actionType.reset };

// const Counter4: React.FC = (): React.ReactElement => {
//   const reducer = (count: State, action: Action): State => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return count + action.payload;
//       case 'DECREMENT':
//         return count - action.payload;
//       case 'RESET':
//         return 0;
//       default:
//         return 0;
//     }
//   };

//   const [count, countDispatch] = useReducer(reducer, 0);

//   return (
//     <div>
//       <div className='count-container'>{count}</div>
//       <div>
//         <button
//           onClick={() =>
//             countDispatch({ type: actionType.decrement, payload: 4 })
//           }
//         >
//           Minus 4
//         </button>
//         <button
//           onClick={() =>
//             countDispatch({ type: actionType.increment, payload: 4 })
//           }
//         >
//           Plus 4
//         </button>
//         <button onClick={() => countDispatch({ type: actionType.reset })}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Counter4;
