import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../ui/shared/utils/httpConfig.js";

const slice = createSlice({
    name: "comments",
    initialState: [],
    reducers: {
        getAllComments: (comments, action) => {
            return action.payload
        }
    }
})

export const {getAllComments} = slice.actions

export const fetchAllComments = () => async (dispatch) => {
    const {data} =  await httpConfig.get("/apis/comment/");
    dispatch(getAllComments(data));
};

export default slice.reducer