import location from './location'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import auth from "./auth";

const reducer = combineReducers({location, auth})

export const store = configureStore({reducer})