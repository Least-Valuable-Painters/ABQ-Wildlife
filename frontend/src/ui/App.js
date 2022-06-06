import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Feed } from './Feed';
import { FourOhFour } from './FourOhFour';
import {OffCanvasNavbar} from "./Navbar";



export const App = () => (
    <>
        <BrowserRouter>
            <OffCanvasNavbar/>
            <Routes>
                <Route  path='/' element={<Feed />} />
                <Route path='*' element={<FourOhFour />} />
            </Routes>
        </BrowserRouter>

    </>
)
