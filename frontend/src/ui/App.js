import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Home} from './Home';
import {Upload} from './Upload';
import {FourOhFour} from './FourOhFour';
import React from 'react';
import {ClickFavorite} from "./Favorite";
import {Navbar} from "./Navbar";
import {ScratchMap} from "./ScratchMap";
import {Provider} from "react-redux";
import {User} from "./User";


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
    </>
)
