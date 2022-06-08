import location from './location'
import {combineReducers, configureStore} from '@reduxjs/toolkit'

const reducer = combineReducers({location})

export const store = configureStore({reducer})