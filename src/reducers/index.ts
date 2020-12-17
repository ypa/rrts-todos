import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// This is the interface of the entire state of Redux store.
// It'll serve as documentation in addition to type safety
// it brings with what reducers can return.
// This is a killer feature of using TS with Redux.
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});
