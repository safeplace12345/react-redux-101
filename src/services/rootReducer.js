import postsReducer from './postsReducer/reducer'
import commentsReducer from './commentsReducer/reducer';
import userReducer from './usersReducer/reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
   posts: postsReducer,
   comments : commentsReducer,
   user:userReducer
})

export default rootReducer;