import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    start: null,
    destination: null,
    travelTime: null
}

export const navSlice = createSlice({
    name: 'navigation',
    initialState,
    reducer: {
        setStart: (state, action) => {
            state.start = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTime: (state, action) => {
            state.travelTime = action.payload
        }
    }
})

export const { setStart , setDestination , setTravelTime } = navSlice.actions

export const selectStart =  (state) => state.navigation.start
export const selectDestination =  (state) => state.navigation.destination
export const selectTravelTime =  (state) => state.navigation.travelTime

export default navSlice.reducer;