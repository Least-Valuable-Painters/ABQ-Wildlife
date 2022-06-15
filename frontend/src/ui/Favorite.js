import React from "react";
import {ListGroup, Container, Row} from "react-bootstrap";
import './favorite.css';



export const ClickFavorite = () => {

    return (
        <>
            <div className="favoriteBackground container-fluid">
                <Container className="favoriteModule bg-dark">
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
                            Limestone Canyon
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="light" action href="#link6">
                            Valle Vidal
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="secondary" action href="#link7">
                            Valles Caldera
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="light" action href="#link8">
                            Rio Mora
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="secondary" action href="#link9">
                            Fort Union
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="light" action href="#link10">
                            Valle De Oro
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="secondary" action href="#link11">
                            Quivira Coalitions's Red Canyon Reserve
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item" variant="light" action href="#link12">
                            Wolf Creek
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
            </div>
        </>
    )
}
