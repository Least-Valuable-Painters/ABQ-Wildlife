import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../ui/shared/utils/httpConfig";


// Define our reducer and action
const signInSlice = createSlice({
  name: 'signIn',
  initialState: [],
  reducers: {
    setAllSignIn: (signin, action) => action.payload
  }
})

// Make our actions callable as function setAllMisquotes
export const {setAllSignIn} = signInSlice.actions

export default signInSlice.reducer

// create an export to allow async calls to our action
export const fetchAllSignIn = () => async dispatch => {
  const {data} = await httpConfig('/apis/misquote/')
  dispatch(setAllSignIn(data))
}