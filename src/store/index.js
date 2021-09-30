import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {digimonsReducer, digimonsListReducer} from "./modules/digimons/reducers";

const reducers = combineReducers({digimons: digimonsReducer, digimons_list: digimonsListReducer});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;