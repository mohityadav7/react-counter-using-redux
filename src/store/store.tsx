import { createStore } from 'redux';
import countReducer from './countReducer';

const store = createStore(countReducer);

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
