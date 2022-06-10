import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import uploadPlaceholder from '../img/uploadPlaceholder.jpg'
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
                                <p className="my-4">Choose a file to upload from your computer or drag and drop it here</p>
                            </div>
                            <form className="formContainer bg-primary rounded-3 w-100" action="./apis/" method="post" noValidate>
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
