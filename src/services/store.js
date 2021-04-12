import {createStore , applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {fetchDataActionType} from './usersReducer/reducer'
import   {composeWithDevTools} from 'redux-devtools-extension'
const middleWare = [
    thunk,
    logger
]
export const store = createStore(rootReducer,(composeWithDevTools(applyMiddleware(...middleWare))))
store.dispatch(fetchDataActionType())
// Test