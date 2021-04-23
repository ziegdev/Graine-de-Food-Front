/* eslint-disable no-underscore-dangle */
import { createStore,  applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import authMiddleware from 'src/middlewares/auth';
import registerMiddleware from 'src/middlewares/register';
import userUpdateMiddleware from 'src/middlewares/userUpdate';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, registerMiddleware, userUpdateMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
