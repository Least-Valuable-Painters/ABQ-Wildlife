import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from "react-redux";
// import {Home} from './Home';
import {FourOhFour} from './FourOhFour';
// import {Navbar} from "./Navbar";
// import {Upload} from './Upload';
import {Feed} from "./Feed";
import {ClickFavorite} from "./Favorite";
// import {ScratchMap} from "./ScratchMap";
import {Navbar} from "./shared/components/usernav/UserNav";
import {SignUp} from "./SignUp";
import 'mapbox-gl/dist/mapbox-gl.css';
import {Image} from "./UploadImages/Image";

export const App = (store) => (
    <>

        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    {/*<Route path='/favnav' element={<Navbar/>}/>*/}
                    {/*<Route path='/map' element={<ScratchMap/>}/>*/}
                    <Route path='/' element={<Feed/>}/>
                    <Route path='/favorite/:favoriteUserId' element={<ClickFavorite/>} favoriteUserId=":favoriteUserId"/>
                    <Route path='/upload' element={<Image/>}/>
                    <Route path='/user' element={<SignUp/>}/>
                    <Route path='*' element={<FourOhFour/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>

    </>
)
