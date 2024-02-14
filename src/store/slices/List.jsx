import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list:[]
}

const List = createSlice({
    name:"Todo_List",
    initialState,
    reducers:{
        addItems:(state,action)=>{
            state.list.push(action.payload)
        }
           
    }
})

export default List.reducer
export const {addItems} = List.actions