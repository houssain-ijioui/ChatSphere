import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    room: null,
    pseudoname: null
}


const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setRoomR: (state, action) => {
            state.room = action.payload
        }
    }  
})

export const { setRoomR } = chatSlice.actions;

export default chatSlice.reducer;