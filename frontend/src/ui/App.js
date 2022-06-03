import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Navbar} from "./Navbar";
import "./App.css"



export const App = () => (
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route path='*' element={<FourOhFour />} />
            </Routes>
        </BrowserRouter>

    </>
)
