import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser, createUser, updateUser } from "./authAPI";
import { useSelector } from "react-redux";

const initialState = {
  loggedInUser: null,
  status: "idle",
  error: null,
};

export const userSliceAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
  "user/checkUser",
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async (update) => {
    const response = await updateUser(update);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userSliceAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userSliceAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        // const index=state.loggedInUser.findIndex(user=>user.id===action.payload.id)
        // state.loggedInUser[index] = action.payload;
        state.loggedInUser=action.payload
      })
      
  },
});

export const selectLoggedInUser = (state) => state.user.loggedInUser;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
