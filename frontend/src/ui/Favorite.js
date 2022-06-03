import React from "react";
import {ListGroup, Container, Row} from "react-bootstrap";
import './favorite.css';


export const ClickFavorite = () => {

    return (
        <>
            <Container className="background">
                <Row className="favorites-row">

                    <h1>Favorites</h1>

                    <ListGroup className="list-group list-group-hover" defaultActiveKey="#link1">
                        <ListGroup.Item className="list-group-item" variant="secondary" action href="#link1">
                            Aldo Leopold Forest
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="light" action href="#link2">
                            Cebolla Canyon
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="secondary" action href="#link3">
                            Cedro Creek
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="light" action href="#link4">
                        Midnight Meadows
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="secondary" action href="#link5">
                            Empty Location-1
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="light" action href="#link6">
                            Empty Location-2
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="secondary" action href="#link7">
                            Empty Location-3
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="light" action href="#link8">
                            Empty Location-4
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="secondary" action href="#link9">
                            Empty Location-5
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="light" action href="#link10">
                            Empty Location-6
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="secondary" action href="#link11">
                            Empty Location-7
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="light" action href="#link12">
                            Empty Location-8
                        </ListGroup.Item>
                    </ListGroup>

                </Row>
            </Container>
        </>
    )
}
