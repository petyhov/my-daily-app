import { createSlice } from '@reduxjs/toolkit';
import { setCookie } from 'helpers';
import { cookiesNames } from 'config';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    _id: '',
  },
  reducers: {
    setUserData: (_, { payload }) => {
      setCookie(cookiesNames.userId, payload._id);
      return payload;
    },
  },
});

export const userActions = userSlice.actions;

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     // dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// export const selectCount = (state) => state.counter.value;

export default userSlice.reducer;
