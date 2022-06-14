import React, {useEffect, useState} from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Feed.css"
// import jpg from "./feed-images/cedro-creek-1.jpg"
// import img from "./feed-images/cedro-creek-2.jpg"
// import jpg2 from "./feed-images/cedro-creek-3.jpg"
// import jpg3 from "./feed-images/Aldo-1.jpg"
// import jpg4 from "./feed-images/Aldo-2.jpg"
// import jpg5 from "./feed-images/Aldo-3.jpg"
// import jpg6 from "./feed-images/Cebolla-1.jpg"
// import jpg7 from "./feed-images/Cebolla-2.jpg"
// import jpg8 from "./feed-images/Cebolla-3.jpg"
// import jpg9 from "./feed-images/Midnight-1.jpg"
// import jpg10 from "./feed-images/Midnight-2.jpg"
// import jpg11 from "./feed-images/Midnight-3.jpg"
// import {Navbar} from "./shared/components/usernav/UserNav";
import 'mapbox-gl/dist/mapbox-gl.css';
import {ScratchMap} from "./ScratchMap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllLocations} from "../store/location";
import {fetchAllImages} from "../store/image";

export function Feed() {

    const locations = useSelector(state => state.location ? state.location : []);
    const images = useSelector(state => state.image ? state.image : []);
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAllLocations())
        dispatch(fetchAllImages())
    };
    const inputs = [dispatch];
    useEffect(effects, inputs);
    console.log(locations)
    console.log(images)


    const [index, setIndex] = useState({});

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <ScratchMap/>
            {images.length && locations.map(location => (
                  <Carousel id={location.locationId} key={location.locationId} activeIndex={index[location.locationId]} onSelect={handleSelect} interval={null} className="mx-auto carousels">
                      {images.filter(image => image.imageLocationId === location.locationId).map(image => (
                        <Carousel.Item key={image.imageId}>
                            <img
                              className="d-block w-100"
                              src={image.imageUrl}
                              alt="Aldo Leopold 1"
                            />
                            <Carousel.Caption>
                                <h3>{location.locationName}</h3>
                                <p>2009</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                      ))}

                  </Carousel>
            ))}
                {/*<Carousel id="carousel1" activeIndex={index} onSelect={handleSelect} className="mx-auto">*/}
                {/*    <Carousel.Item>*/}
                {/*        <img*/}
                {/*            className="d-block w-100"*/}
                {/*            src={jpg3}*/}
                {/*            alt="Aldo Leopold 1"*/}
                {/*        />*/}
                {/*        <Carousel.Caption>*/}
                {/*            <h3>Aldo Leopold Forest</h3>*/}
                {/*            <p>2009</p>*/}
                {/*        </Carousel.Caption>*/}
                {/*    </Carousel.Item>*/}
                {/*    <Carousel.Item>*/}
                {/*        <img*/}
                {/*            className="d-block w-100"*/}
                {/*            src={jpg4}*/}
                {/*            alt="Aldo Leopold 2"*/}
                {/*        />*/}

                {/*        <Carousel.Caption>*/}
                {/*            <h3>Aldo Leopold Forest</h3>*/}
                {/*            <p>2009</p>*/}
                {/*        </Carousel.Caption>*/}
                {/*    </Carousel.Item>*/}
                {/*    <Carousel.Item>*/}
                {/*        <img*/}
                {/*            className="d-block w-100"*/}
                {/*            src={jpg5}*/}
                {/*            alt="Aldo Leopold 3"*/}
                {/*        />*/}

                {/*        <Carousel.Caption>*/}
                {/*            <h3>Aldo Leopold Forest</h3>*/}
                {/*            <p>2009</p>*/}
                {/*        </Carousel.Caption>*/}
                {/*    </Carousel.Item>*/}
                {/*</Carousel>*/}

            {/*    <Carousel id="carousel2" className="mx-auto">*/}
            {/*        <Carousel.Item>*/}
            {/*            <img*/}
            {/*                className="d-block w-100"*/}
            {/*                src={jpg6}*/}
            {/*                alt="Cebolla Canyon 1"*/}
            {/*            />*/}
            {/*            <Carousel.Caption>*/}
            {/*                <h3>Cebolla Canyon</h3>*/}
            {/*                <p>September 2019</p>*/}
            {/*            </Carousel.Caption>*/}
            {/*        </Carousel.Item>*/}

            {/*        <Carousel.Item>*/}
            {/*            <img*/}
            {/*                className="d-block w-100"*/}
            {/*                src={jpg7}*/}
            {/*                alt="Cebolla Canyon 2"*/}
            {/*            />*/}
            {/*            <Carousel.Caption>*/}
            {/*                <h3>Cebolla Canyon</h3>*/}
            {/*                <p>September 2019</p>*/}
            {/*            </Carousel.Caption>*/}
            {/*        </Carousel.Item>*/}

            {/*        <Carousel.Item>*/}
            {/*            <img*/}
            {/*                className="d-block w-100"*/}
            {/*                src={jpg8}*/}
            {/*                alt="Cebolla Canyon 3"*/}
            {/*            />*/}
            {/*            <Carousel.Caption>*/}
            {/*                <h3>Cebolla Canyon</h3>*/}
            {/*                <p>September 2019</p>*/}
            {/*            </Carousel.Caption>*/}
            {/*        </Carousel.Item>*/}
            {/*    </Carousel>*/}

            {/*<Carousel id="carousel3" className="mx-auto">*/}
            {/*    <Carousel.Item>*/}
            {/*        <img*/}
            {/*            className="d-block w-100"*/}
            {/*            src={jpg}*/}
            {/*            alt="Cedro Creek 1"*/}
            {/*        />*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h3>Cedro Creek</h3>*/}
            {/*            <p>October 2019</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}

            {/*    <Carousel.Item>*/}
            {/*        <img*/}
            {/*            className="d-block w-100"*/}
            {/*            src={img}*/}
            {/*            alt="Cedro Creek 2"*/}
            {/*        />*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h3>Cedro Creek</h3>*/}
            {/*            <p>October 2019</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}

            {/*    <Carousel.Item>*/}
            {/*        <img*/}
            {/*            className="d-block w-100"*/}
            {/*            src={jpg2}*/}
            {/*            alt="Cedro Creek 3"*/}
            {/*        />*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h3>Cedro Creek</h3>*/}
            {/*            <p>October 2019</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}

            {/*</Carousel>*/}

            {/*<Carousel id="carousel4" className="mx-auto">*/}
            {/*    <Carousel.Item>*/}
            {/*        <img*/}
            {/*            className="d-block w-100"*/}
            {/*            src={jpg9}*/}
            {/*            alt="Midnight Meadows 1"*/}
            {/*        />*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h3>Midnight Meadows</h3>*/}
            {/*            <p>August 2019</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}

            {/*    <Carousel.Item>*/}
            {/*        <img*/}
            {/*            className="d-block w-100"*/}
            {/*            src={jpg10}*/}
            {/*            alt="Midnight Meadows 2"*/}
            {/*        />*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h3>Midnight Meadows</h3>*/}
            {/*            <p>August 2019</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}

            {/*    <Carousel.Item>*/}
            {/*        <img*/}
            {/*            className="d-block w-100"*/}
            {/*            src={jpg11}*/}
            {/*            alt="Midnight Meadows 3"*/}
            {/*        />*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h3>Midnight Meadows</h3>*/}
            {/*            <p>August 2019</p>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*</Carousel>*/}
        </>
    )
}
