 import { createSlice } from "@reduxjs/toolkit";

 const cartSlice=createSlice({

    name:'card',
    initialState:{
        items:[],
    },
    reducers:{
        addItem(state, {payload}){
            state.items=[ 
            ...state.items, payload
            ] ;
        },
        removeItem(state,{payload}){
            // payload.id
        }
    }
 })






export const {addItem,removeItem} =cartSlice.actions
 export const cartReducer=cartSlice.reducer;