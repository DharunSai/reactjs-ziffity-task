import { createSlice } from '@reduxjs/toolkit';

export const planetSlice = createSlice({
    name:'planet',
    initialState:{
        data:[
           
        ]
    },
    reducers:{
        addPlanet:(state,action)=>{
            state.data = [action.payload]
        }
    }
});

export const { addPlanet } = planetSlice.actions;
export default planetSlice.reducer;