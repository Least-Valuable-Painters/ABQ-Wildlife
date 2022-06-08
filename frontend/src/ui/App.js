import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Feed} from "./Feed"

export const App = () => (
    <>
        <BrowserRouter>
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route path='*' element={<FourOhFour />} />
                <Route path='/feed' element={<Feed/>}/>
            </Routes>
        </BrowserRouter>

    </>
)