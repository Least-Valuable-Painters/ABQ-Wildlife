<<<<<<< HEAD
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Home} from './Home';
import {Upload} from './Upload';
import {FourOhFour} from './FourOhFour';
import React from 'react';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Feed} from "./Feed"
>>>>>>> feed
import {ClickFavorite} from "./Favorite";
import {Navbar} from "./Navbar";
import {ScratchMap} from "./ScratchMap";
import {Provider} from "react-redux";
import {User} from "./User";
import 'mapbox-gl/dist/mapbox-gl.css';


<<<<<<< HEAD

export const App = (store) => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='*' element={<FourOhFour/>}/>
                    <Route path='/favorite' element={<ClickFavorite/>}/>
                    <Route path='/favnav' element={<Navbar/>}/>
                    <Route path='/map' element={<ScratchMap/>}/>
                    <Route path='/upload' element={<Upload/>}/>
                    <Route path='/user' element={<User/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
=======
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
>>>>>>> feed
    </>
)
