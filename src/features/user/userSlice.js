import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoggedInUser, fetchLoggedInUserOrder } from "./userAPI";

const initialState = {
  userInfo: [],
  status: "idle",
  userOrders: []
};

export const fetchLoggedInUserAsync = createAsyncThunk(
  "order/fetchLoggedInUser",
  async (userId) => {
    const response = await fetchLoggedInUser(userId);
    return response.data;
  }
);

export const fetchLoggedInUserOrderAsync = createAsyncThunk(
  "order/fetchLoggedInUserOrder",
  async (userId) => {
    const response = await fetchLoggedInUserOrder(userId);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (bundle) => {
    bundle
      .addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userInfo = action.payload;
      })
      .addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userOrders = action.payload;
      })
  },
});

export const selectUserInfo = (state) => state.user.userInfo;
export const selectUserOrder=(state)=>state.user.userOrders
export default userSlice.reducer;
