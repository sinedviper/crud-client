import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { usersReducer } from "./features/Users/users-slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
