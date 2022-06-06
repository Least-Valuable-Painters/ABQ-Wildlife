import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import uploadPlaceholder from '../img/uploadPlaceholder.jpg'
import './App.css'


export const Upload = () => {
    return (
        <>
            <Container className="uploadBody">
                <div className="text-center my-3">
                    <h1><u><strong>Upload</strong></u></h1>
                    <p className="my-4">Choose a file to upload from your computer</p>
                </div>
                <Container>
                    <Row>
                        <Col xs={0} md={1} lg={3}>

                        </Col>
                        <Col xs={12} md={10} lg={6}>
                            <div className="text-center">
                                <img className="img-fluid uploadPlaceholder" src={uploadPlaceholder}
                                     alt="upload placeholder"></img>
                            </div>
                            <form>
                                <Row className="my-3">
                                    <Col lg={3} md={5} sm={6}>
                                        <label htmlFor="locationForm" className="labelItem"/>
                                        Location:
                                    </Col>
                                    <Col lg={9} md={7} sm={6}>
                                        <input id="locationForm" type="text" name="locationForm"
                                               placeholder="Location"
                                               aria-label="locationForm" />
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col lg={3} md={5} sm={6}>
                                        <label htmlFor="titleForm" className="labelItem"/>
                                        Title:
                                    </Col>
                                    <Col lg={9} md={7} sm={6}>
                                        <input id="titleForm" type="text" name="titleForm" placeholder="Title"
                                               aria-label="titleForm"/>
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col lg={3} md={5} sm={6}>
                                        <label htmlFor="descriptionForm" className="labelItem"/>
                                        Description:
                                    </Col>
                                    <Col lg={9} md={7} sm={6}>
                                        <input id="descriptionForm" type="text" name="descriptionForm"
                                               placeholder="Description"
                                               aria-label="descriptionForm"/>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                        <Col xs={0} md={1} lg={12}>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
};
