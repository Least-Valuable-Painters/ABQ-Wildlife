import React from "react";
import {Navbar} from "./Navbar";
import {Col, Container, Row} from "react-bootstrap";
import './map.css'
import Map from "react-map-gl";
import {Pin} from "./Pin";



export const ScratchMap = () => {
    const [points] = React.useState([
        {lat: 34.761992, lng: -107.9322794},
        {lat: 33.1070159, lng: -107.8555932},
        {lat: 35.0222704, lng: -106.3536358},
        {lat: 36.7639184, lng: -105.3527816}
    ])

    return (
        <>
            <Navbar/>
            <h1>Home</h1>

            <Container className="map-wrapper">
                <Row className="justify-content-center">
                    <Col>
                        <h1>Find your favorite landscape on the map</h1>
                        <Map
                            initialViewState={{
                                latitude: 35.106766,
                                longitude: -106.629181,
                                zoom: 9
                            }}
                            style={{width: 700, height: 600}}
                            mapStyle="mapbox://styles/mapbox/dark-v9">

                            {points.map((point, index)  => <Pin lat={point.lat} index={index} key={index}/>)}
                        </Map>
                    </Col>
                </Row>
            </Container>
        </>
    )
}