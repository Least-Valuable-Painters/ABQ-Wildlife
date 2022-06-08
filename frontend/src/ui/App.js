import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {ClickFavorite} from "./Favorite";
import {Navbar} from "./Navbar";
import {ScratchMap} from "./ScratchMap";
import {User} from "./User";



export const App = () => (
    <>
        <BrowserRouter>
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route path='*' element={<FourOhFour />} />
                <Route path='/user' element={<User/>}/>
                <Route path='/favorite' element={<ClickFavorite />} />
                <Route path='/favnav' element={<Navbar />} />
                <Route path='/map' element={<ScratchMap />} />
            </Routes>
        </BrowserRouter>
    </>
)
