import { userReducer } from "./features/User/user-slice";
import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./features/Users/users-slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
