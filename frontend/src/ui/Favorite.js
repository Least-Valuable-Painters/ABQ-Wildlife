import React from "react";
import {ListGroup, Container, Row} from "react-bootstrap";
import './favorite.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchFavoritesByFavoriteUserId} from "../store/favorite";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {fetchAllLocations} from "../store/location";



export const ClickFavorite = () => {
    const {favoriteUserId} = useParams()
    const locations = useSelector(state => state.location ? state.location : []);
    const favorites = useSelector(state => {
        if(typeof state?.favorite==="object"){
            return Object.values(state.favorite)
        }else{
            return []
        } })
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchFavoritesByFavoriteUserId(favoriteUserId))
        dispatch(fetchAllLocations())
    }
    useEffect(effects, [dispatch])
    console.log(favorites)
    console.log(locations)
    return (
        <>
            <div className="favoriteBackground container-fluid">
                <Container className="favoriteModule bg-dark">
                    <h1>Favorites</h1>

                    <ListGroup className="list-group list-group-hover" defaultActiveKey="#link1">
                        {locations.length && favorites.map(favorite=> {
                            let location = locations.find(location=>location.locationId===favorite.favoriteLocationId)
                                return (<ListGroup.Item key={location.locationId} className="list-group-item" variant="secondary" action href="#link1">
                                    {location.locationName}
                            </ListGroup.Item>)

                        })}
                        {/*<ListGroup.Item className="list-group-item" variant="light" action href="#link2">*/}
                        {/*    Cebolla Canyon*/}
                        {/*</ListGroup.Item>*/}
                        {/*<ListGroup.Item className="list-group-item" variant="secondary" action href="#link3">*/}
                        {/*    Cedro Creek*/}
                        {/*</ListGroup.Item>*/}
                        {/*<ListGroup.Item className="list-group-item" variant="light" action href="#link4">*/}
                        {/*Midnight Meadows*/}
                        {/*</ListGroup.Item>*/}
                        {/*<ListGroup.Item className="list-group-item" variant="secondary" action href="#link5">*/}
                        {/*    Limestone Canyon*/}
                        {/*</ListGroup.Item>*/}
                        {/*<ListGroup.Item className="list-group-item" variant="light" action href="#link6">*/}
                        {/*    Valle Vidal*/}
                        {/*</ListGroup.Item>*/}
                        {/*<ListGroup.Item className="list-group-item" variant="secondary" action href="#link7">*/}
                        {/*    Valles Caldera*/}
                        {/*</ListGroup.Item>*/}
                        {/*<ListGroup.Item className="list-group-item" variant="light" action href="#link8">*/}
                        {/*    Rio Mora*/}
                        {/*</ListGroup.Item>*/}
                        {/*<ListGroup.Item className="list-group-item" variant="secondary" action href="#link9">*/}
                        {/*    Fort Union*/}
                        {/*</ListGroup.Item>*/}
                        {/*<ListGroup.Item className="list-group-item" variant="light" action href="#link10">*/}
                        {/*    Valle De Oro*/}
                        {/*</ListGroup.Item>*/}
                        {/*<ListGroup.Item className="list-group-item" variant="secondary" action href="#link11">*/}
                        {/*    Quivira Coalitions's Red Canyon Reserve*/}
                        {/*</ListGroup.Item>*/}
                        {/*<ListGroup.Item className="list-group-item" variant="light" action href="#link12">*/}
                        {/*    Wolf Creek*/}
                        {/*</ListGroup.Item>*/}
                    </ListGroup>
                </Container>
            </div>
        </>
    )
}
