import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";

import { revReducer } from "./reducers/revReducer";
import { popReducer } from "./reducers/popReducer";

const rootReducer = combineReducers({
  revReducer,
  popReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleWare))
);

// let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.__store__ = store; // don't forget delete this thing before production

export default store;
