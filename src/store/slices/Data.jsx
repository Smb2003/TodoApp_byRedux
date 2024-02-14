import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:{}
}

const Data = createSlice({
    name:"Data_Items",
    initialState,
    reducers:{
        addData:(state,action)=>{
            state.data = action.payload;
        }
           
    }
})

export default Data.reducer
export const {addData} = Data.actions