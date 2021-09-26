import React, { ReactElement } from 'react';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';

const App: React.FC = (): ReactElement => {
  return (
    <div className='counter-container'>
      <Counter />
      <Counter2 />
      <Counter3 />
    </div>
  );
};

export default App;
