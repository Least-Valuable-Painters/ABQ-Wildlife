import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Feed} from "./Feed"
import {ClickFavorite} from "./Favorite";
import {Navbar} from "./Navbar";
import {ScratchMap} from "./ScratchMap";


export const App = () => (
    <>
        <BrowserRouter>
            <Routes>
                <Route  path='/home' element={<Home />} />
                <Route path='/four' element={<FourOhFour />} />
                <Route path='/favorite' element={<ClickFavorite />} />
                <Route path='/favnav' element={<Navbar />} />
                <Route path='/map' element={<ScratchMap />} />
                <Route path='/feed' element={<Feed/>}/>
            </Routes>
        </BrowserRouter>
    </>
)
