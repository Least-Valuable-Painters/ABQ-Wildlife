import location from './location'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import auth from "./auth";
import image from "./image";

const reducer = combineReducers({location, auth, image})

export const store = configureStore({reducer})