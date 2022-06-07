import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import uploadPlaceholder from '../img/uploadPlaceholder2.jpg'
import './App.css'


export const Upload = () => {
    return (
        <>
            <Container className="uploadBody">
                <Container>
                    <Row>
                        <Col xs={0} md={1} lg={3}>

                        </Col>
                        <Col xs={12} md={10} lg={6}>
                            <div className="text-center p-3 my-3 uploadHeader bg-primary rounded">
                                <h1><strong>Upload</strong></h1>
                                <p className="my-4">Choose a file to upload from your computer</p>
                            </div>
                            <div className="text-center">
                                <img className="img-fluid uploadPlaceholder" src={uploadPlaceholder}
                                     alt="upload placeholder"></img>
                            </div>
                            <form className="formContainer bg-primary rounded-3" action="./apis/" method="post" noValidate>
                                <Row className="m-3">
                                    <Col lg={3} md={5} sm={6}>
                                        <label htmlFor="locationForm" className="labelItem"/>
                                        Location:
                                    </Col>
                                    <Col lg={9} md={7} sm={6}>
                                        <input id="locationForm" type="text" name="locationForm"
                                               placeholder="Location"
                                               aria-label="locationForm"/>
                                    </Col>
                                </Row>
                                <Row className="m-3">
                                    <Col lg={3} md={5} sm={6}>
                                        <label htmlFor="titleForm" className="labelItem"/>
                                        Title:
                                    </Col>
                                    <Col lg={9} md={7} sm={6}>
                                        <input id="titleForm" type="text" name="titleForm" placeholder="Title"
                                               aria-label="titleForm"/>
                                    </Col>
                                </Row>
                                <Row className="m-3">
                                    <Col lg={3} md={5} sm={6}>
                                        <label htmlFor="descriptionForm" className="labelItem"/>
                                        Description:
                                    </Col>
                                    <Col lg={9} md={7} sm={6}>
                                        <textarea id="descriptionForm" name="descriptionForm"
                                               placeholder="Description"
                                               aria-label="descriptionForm" rows="3"/>
                                    </Col>
                                </Row>
                            </form>
                            <div className="text-center m-3">
                                <button type="button" className="btn btn-primary">Upload Picture</button>
                            </div>
                        </Col>
                        <Col xs={0} md={1} lg={12}>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
};
