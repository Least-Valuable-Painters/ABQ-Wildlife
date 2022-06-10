import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from '../ui/shared/utils/httpConfig'

// Define our reducer and action
const locationSlice = createSlice({
    name: 'location',
    initialState: [],
    reducers: {
        setAllLocations: (location, action) => action.payload
    }
})

// Make our actions callable as function setAllLocations
export const {setAllLocations} = locationSlice.actions

export default locationSlice.reducer

// create an export to allow async calls to our action
export const fetchAllLocations = () => async dispatch => {
    const {data} = await httpConfig('/apis/location')
    dispatch(setAllLocations(data))
}