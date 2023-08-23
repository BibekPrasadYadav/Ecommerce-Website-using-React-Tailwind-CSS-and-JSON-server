import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoggedInUser, fetchLoggedInUserOrder, updateUser } from "./userAPI";

const initialState = {
  userInfo: null,
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

export const updateUserAsync=createAsyncThunk(
  "order/updateUser",
  async(userId)=>{
    const response=await updateUser(userId);
    return response.data;
  }
)

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
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        // const index=state.userInfo.findIndex(user=>user.id===action.payload.id)
        // state.userInfo[index] = action.payload;
        state.userInfo=action.payload
      })
  },
});

export const selectUserInfo = (state) => state.user.userInfo;
export const selectUserOrder=(state)=>state.user.userOrders
export default userSlice.reducer;
