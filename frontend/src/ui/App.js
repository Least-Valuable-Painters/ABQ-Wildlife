import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Feed } from './Feed';
import { FourOhFour } from './FourOhFour';
import {OffCanvasNavbar} from "./Navbar";
import { Upload } from './Upload'
// import {OffCanvasNavbar} from "./Navbar";



export const App = () => (
    <>
        <BrowserRouter>
            <OffCanvasNavbar/>
            {/*<Navbar2/>*/}
            <Routes>
                <Route path='/' element={<Feed />} />
                <Route path='/upload' element={<Upload />} />
                <Route path='*' element={<FourOhFour />} />
            </Routes>
        </BrowserRouter>

    </>
)
