import { createSlice } from "@/insulate/@reduxjs/toolkit/dist";

const initialState = {
    value : 0
}

const myslice = createSlice({
    name:"userslice",
    initialState,
    reducers:{
        increment : (state,action)=>{
            state.value = {...state.value, ...action.payload}
        }
    }
})


export default myslice.action

