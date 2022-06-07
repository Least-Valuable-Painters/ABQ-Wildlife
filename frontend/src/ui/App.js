import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {ClickFavorite} from "./Favorite";
import {Navbar} from "./Navbar";


export const App = () => (
    <>
        <BrowserRouter>
            <Routes>
                <Route  path='/home' element={<Home />} />
                <Route path='/four' element={<FourOhFour />} />
                <Route path='/favorite' element={<ClickFavorite />} />
                <Route path='/favnav' element={<Navbar />} />
            </Routes>
        </BrowserRouter>
    </>
)
