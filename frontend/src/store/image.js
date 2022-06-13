import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from '../ui/shared/utils/httpConfig'

// Define our reducer and action
const imageSlice = createSlice({
  name: 'image',
  initialState: [],
  reducers: {
    setAllImages: (image, action) => action.payload
  }
})

// Make our actions callable as function setAllImages
export const {setAllImages} = imageSlice.actions

export default imageSlice.reducer

// create an export to allow async calls to our action
export const fetchAllImages = () => async dispatch => {
  const {data} = await httpConfig('/apis/image')
  dispatch(setAllImages(data))
}