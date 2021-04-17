import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import tourReducer from './tourReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    tour: tourReducer
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)));