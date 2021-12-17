import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";

import { popReducer } from "./reducers/popReducer";
import { revReducer } from "./reducers/revReducer";

const rootReducer = combineReducers({
  revReducer,
  popReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const composeEnhancers =
  //@ts-ignore
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleWare))
);

// let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;
