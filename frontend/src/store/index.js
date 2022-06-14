import location from './location'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import auth from "./auth";
import image from "./image";
import favorite from "./favorite";

const reducer = combineReducers({location, auth, image, favorite})

export const store = configureStore({reducer})