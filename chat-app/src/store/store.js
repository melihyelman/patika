import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducerRoot from "./reducerRoot"

const store = createStore(reducerRoot, {}, composeWithDevTools());

export default store;