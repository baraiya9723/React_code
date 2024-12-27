import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  // Combine multiple reducers here if you have other parts of the application state
  todos: todoReducer, 
});

const store = createStore(rootReducer);

export default store;