import { combineReducers } from 'redux';
import USERSlice from './userData';
import DBSlice from './accessDB';
import POSTSlice from './posts';
import COMMENTSlice from './comments';

const rootReducer = combineReducers ({
   posts: POSTSlice,
   userData:USERSlice,
   dbAccess:DBSlice,
   comments:COMMENTSlice,
});

export default rootReducer;
