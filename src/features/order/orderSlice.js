import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createOrder } from "./orderAPI";

const initialState={
    orders:[],
    status:'idle'
}

export const createOrderAsync=createAsyncThunk(
    "order/createOrder",
    async(order)=>{
    const response=await createOrder(order);
    return response.data
    })

export const orderSlice=createSlice({
    name:'order',
    initialState,
    reducers:{},
    extraReducers:(bundle)=>{
        bundle
        .addCase(createOrderAsync.pending,(state)=>{
            state.status='pending'
        })
        .addCase(createOrderAsync.fulfilled,(state,action)=>{
            state.status='idle'
            state.orders.push(action.payload)
        })
    }
})

export const selectedOrders=(state)=>state.order.orders

export default orderSlice.reducer