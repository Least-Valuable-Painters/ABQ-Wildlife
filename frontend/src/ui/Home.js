import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Navbar} from "./Navbar";


export const Home = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={2} id="navbar-wrapper">
                        <Navbar/>
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                    </Col>
                </Row>
            </Container>
        </>
    );
};
