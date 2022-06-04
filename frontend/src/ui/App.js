import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Feed } from './Feed';
import { FourOhFour } from './FourOhFour';
import {Navbar2} from "./Navbar2";
// import {OffCanvasNavbar} from "./Navbar";



export const App = () => (
    <>
        <BrowserRouter>
            {/*<OffCanvasNavbar/>*/}
            <Navbar2/>
            <Routes>
                <Route  path='/' element={<Feed />} />
                <Route path='*' element={<FourOhFour />} />
            </Routes>
        </BrowserRouter>

    </>
)
