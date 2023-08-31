import { configureStore } from '@reduxjs/toolkit';
import friendsSlice from './slices/friendsSlice';
import userSlice from './slices/userSlice';

export default configureStore({
  reducer: {
    friends: friendsSlice,
    user: userSlice,
  },
});
