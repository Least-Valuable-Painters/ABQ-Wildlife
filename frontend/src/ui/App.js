import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from "react-redux";
import {Home} from './Home';
import {FourOhFour} from './FourOhFour';
import {Upload} from './upload/Upload';
import {Feed} from "./Feed";
import {ClickFavorite} from "./Favorite";
import {ScratchMap} from "./map/ScratchMap";
import {Navbar} from "./shared/components/usernav/UserNav";
import {SignUp} from "./SignUp";
import 'mapbox-gl/dist/mapbox-gl.css';



export const App = (store) => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='*' element={<FourOhFour/>}/>
                    <Route path='/' element={<Feed/>}/>
                    <Route path='/favorite' element={<ClickFavorite/>}/>
                    <Route path='/map' element={<ScratchMap/>}/>
                    <Route path='/upload' element={<Upload/>}/>
                    <Route path='/user' element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </>
)
