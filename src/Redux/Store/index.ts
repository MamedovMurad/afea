import { createStore, compose, applyMiddleware, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../rootReducer";
import rootSaga from "../rootSaga";


const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];

const store= createStore(rootReducer, process.env.NODE_ENV !== 'production' ?
   composeWithDevTools(applyMiddleware(...middlewares)) : applyMiddleware(compose(...middlewares)));
   sagaMiddleware.run(rootSaga);
   
export default store