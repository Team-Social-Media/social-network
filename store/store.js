import thunk from "redux-thunk";
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from "./reducers";

export const store= configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk
    })
})

// const initalState = {};
// const middleware = [thunk];
// export const store = configureStore(
//   rootReducer,
//   initalState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
// const makeStore = () => store;
// export const wrapper = createWrapper(makeStore);

