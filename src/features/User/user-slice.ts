import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interface/User.interface";

interface data {
  users: User | undefined;
  loading: boolean;
  error: string | undefined;
}

interface userState {
  state: string;
  error: string;
  user: data;
}

const initialState: userState = {
  state: "idle",
  error: "",
  user: { users: undefined, loading: false, error: "" },
};

const userSlice = createSlice({
  name: "@@countries",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<data>) => {
      state.state = action.payload.loading ? "loading" : "received";
      if (action.payload.error) {
        state.state = "rejected";
      }
      state.user = action.payload;
      state.error = String(action.payload.error);
    },
  },
});

export const { updateUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectUser = (state) => state.user;

// export const selectAllCountries = (state) => state.countries.list;

// export const selectVisibleCountries = (state, { search = "", region = "" }) => {
//   return state.countries.list.filter(
//     (country) =>
//       country.name.toLowerCase().includes(search.toLowerCase()) &&
//       country.region.includes(region)
//   );
// };

// export const selectCountriesInfo = (state) => ({
//   status: state.countries.status,
//   error: state.countries.error,
//   qty: state.countries.list.length,
// });
