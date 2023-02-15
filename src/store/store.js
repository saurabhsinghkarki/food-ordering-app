import {configureStore} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


const thaliSlice = createSlice({
   name:"thali",
   initialState:{
     items:[] , totalBill:[]
   },
   reducers:{
addItemHandler(state , action){
state.items.push(action.payload);
},
removeItem(state,action){
const id = action.payload;
 state.items = state.items.filter((item)=> item.id !== id)
},
totalBill(state ,action){
state.totalBill.push(action.payload);
}
}});

const store = configureStore({
   reducer:{
    thali:thaliSlice.reducer
   }
})

export const thaliActions = thaliSlice.actions;
export default store;