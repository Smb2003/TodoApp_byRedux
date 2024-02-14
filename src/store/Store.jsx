import { configureStore } from "@reduxjs/toolkit";
import List from "./slices/List";
import Data from "./slices/Data";

const Store = configureStore({
   reducer:{
    Todo_List:List,
    Data_Items:Data
   }

})
export default Store;