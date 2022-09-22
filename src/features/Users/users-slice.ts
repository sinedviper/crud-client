import { User } from "./../../interface/User.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface data {
  users: User[] | undefined;
  load: boolean;
  error: string | undefined;
}

interface usersState {
  state: string;
  error: string;
  list: data;
}

const initialState: usersState = {
  state: "idle",
  error: "",
  list: { users: [], load: false, error: "" },
};

const usersSlice = createSlice({
  name: "@@users",
  initialState: initialState,
  reducers: {
    actionUpdateUsers: (state, action: PayloadAction<data>) => {
      state.state = action.payload.load ? "loading" : "received";
      if (action.payload.error) {
        state.state = "rejected";
      }
      state.list = action.payload;
      state.error = String(action.payload.error);
    },
  },
});

export const { actionUpdateUsers } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;

export const selectAllUsers = (state) => state.users.list;
