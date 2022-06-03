import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './Home';
import { FourOhFour } from './FourOhFour';
import {OffCanvasNavbar} from "./Navbar";



export const App = () => (
    <>
        <BrowserRouter>
            <OffCanvasNavbar/>
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route path='*' element={<FourOhFour />} />
            </Routes>
        </BrowserRouter>

    </>
)
