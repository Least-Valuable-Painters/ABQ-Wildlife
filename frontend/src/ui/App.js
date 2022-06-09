import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from "react-redux";
import {Home} from './Home';
import {FourOhFour} from './FourOhFour';
import {Navbar} from "./Navbar";
import {Upload} from './Upload';
import {Feed} from "./Feed";
import {ClickFavorite} from "./Favorite";
import {ScratchMap} from "./ScratchMap";
import {Navbar} from "./shared/components/usernav/UserNav";
import {SignUp} from "./SignUp";
import 'mapbox-gl/dist/mapbox-gl.css';



export const App = (store) => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='*' element={<FourOhFour/>}/>
                    <Route path='/favorite' element={<ClickFavorite/>}/>
                    <Route path='/favnav' element={<Navbar/>}/>
                    <Route path='/' element={<Feed/>}/>
                    <Route path='/map' element={<ScratchMap/>}/>
                    <Route path='/upload' element={<Upload/>}/>
                    <Route path='/user' element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </>
)
