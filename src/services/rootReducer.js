import postsReducer from './postsReducer/reducer'
import commentsReducer from './commentsReducer/commentsReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
   posts: postsReducer,
   comments : commentsReducer
})

export default rootReducer;