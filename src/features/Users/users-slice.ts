import { User } from "./../../interface/User.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface data {
  users: User[] | undefined;
  loading: boolean;
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
  list: { users: [], loading: false, error: "" },
};

const usersSlice = createSlice({
  name: "@@users",
  initialState: initialState,
  reducers: {
    updateUsers: (state, action: PayloadAction<data>) => {
      state.state = action.payload.loading ? "loading" : "received";
      if (action.payload.error) {
        state.state = "rejected";
      }
      state.list = action.payload;
      state.error = String(action.payload.error);
    },
  },
});

export const { updateUsers } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;

export const allUsers = (state) => state.users.list;
