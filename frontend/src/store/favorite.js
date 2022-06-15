import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from '../ui/shared/utils/httpConfig'

// Define our reducer and action
const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {},
    reducers: {
        setFavorites: (favorite, action) => action.payload
    }
})

// Make our actions callable as function setAllLocations
export const {setFavorites} = favoriteSlice.actions

export default favoriteSlice.reducer

// create an export to allow async calls to our action
export const fetchFavoritesByFavoriteUserId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/favorite/favoriteUserId/${id}`)
    const favoritesDictionary = data.reduce((accumulator, currentValue) => {
        accumulator[currentValue.favoriteLocationId] = currentValue
        return accumulator
    },
      {}
    )
    dispatch(setFavorites(favoritesDictionary))
}