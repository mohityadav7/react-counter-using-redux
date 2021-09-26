import React, { ReactElement } from 'react';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Counter4 from './components/Counter4';

const App: React.FC = (): ReactElement => {
  return (
    <div className='counter-container'>
      <Counter /> {/* using connect & mapStateToProps */}
      <Counter2 /> {/* using connect, mapStateToProps & mapDispatchToProps */}
      <Counter3 /> {/* using redux hooks */}
      <Counter4 /> {/* using useReducer */}
    </div>
  );
};

export default App;
