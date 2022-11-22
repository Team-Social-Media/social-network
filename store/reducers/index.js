import { combineReducers } from 'redux';
import Favorites from './favorites';
import UserData from './userData';
import DBSlice from './accessDB';


const rootReducer = combineReducers ({
   favorites: Favorites,
   userData:UserData,
   dbAccess:DBSlice,
});




export default rootReducer;