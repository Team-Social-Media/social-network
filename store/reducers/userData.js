import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    searchData: [],
  },
  reducers: {
    getUserData: (state, action) => {
      return state;
    },
    updateAllUserData: (state, action) => {
      return state;
    },
    getSearchData: (state, action) => {
      return {
        ...state,
        searchData: action.payload,
      };
    },
  },
});

export const { getSearchData } = userDataSlice.actions;
export default userDataSlice.reducer;
