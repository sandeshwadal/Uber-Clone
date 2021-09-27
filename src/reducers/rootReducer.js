import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    start: null,
    destination: null,
    travelTime: null
}

export const navSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setStart: (state, action) => {
            state.start = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTime: (state, action) => {
            state.travelTime = action.payload
        },
    },
});

export const { setStart, setDestination, setTravelTime } = navSlice.actions

export const selectStart = (state) => state.nav.start;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTime = (state) => state.nav.travelTime;

export default navSlice.reducer;