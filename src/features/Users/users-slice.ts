import {
  createUser,
  getUsers,
  removeUser,
  updateUser,
} from "./../../mutation/User";
import { client } from "./../../index";
import { User } from "./../../interface/User.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const loadUsers = createAsyncThunk("@@users/load-users", () => {
  return client.query({ query: getUsers });
});

export const removeUsers = createAsyncThunk(
  "@@users/remove-user",
  (id: String) => {
    return client.mutate({ mutation: removeUser, variables: { id } });
  }
);

export const createUsers = createAsyncThunk(
  "@@users/create-user",
  (user: Omit<User, "_id">) => {
    return client.mutate({ mutation: createUser, variables: { user } });
  }
);

interface data {
  id: String;
  user: Omit<User, "_id">;
}

export const editUsers = createAsyncThunk(
  "@@users/update-user",
  (data: data) => {
    return client.mutate({
      mutation: updateUser,
      variables: { id: data.id, user: data.user },
    });
  }
);

interface usersState {
  status: string;
  error: any;
  list: User[];
  user: User | null;
}

const initialState: usersState = {
  status: "idle",
  error: "",
  list: [],
  user: null,
};

const usersSlice = createSlice({
  name: "@@users",
  initialState: initialState,
  reducers: {
    actionUser: (state, action: PayloadAction<String>) => {
      // eslint-disable-next-line array-callback-return
      state.list.map((val): void => {
        // eslint-disable-next-line eqeqeq
        if (val._id == action.payload) {
          state.user = val;
        }
      });
    },
    actionRemoveUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data.getUsers;
      })
      .addCase(removeUsers.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(removeUsers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta;
      })
      .addCase(removeUsers.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data.removeUser;
      })
      .addCase(createUsers.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createUsers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta;
      })
      .addCase(createUsers.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data.createUser;
      })
      .addCase(editUsers.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(editUsers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta;
      })
      .addCase(editUsers.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data.updateUser;
      });
  },
});

export const { actionUser, actionRemoveUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;

export const selectAllUsers = (state): usersState => state.users;
