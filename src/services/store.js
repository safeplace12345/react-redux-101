import {createStore } from 'redux'
import reducer from './reducer'
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
const logger = createLogger();

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)))