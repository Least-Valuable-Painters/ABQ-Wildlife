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
        if (typeof state?.favorite === "object") {
            return Object.values(state.favorite)
        } else {
            return []
        }
    })
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
            <div className="favoriteBackground d-flex mx-auto align-content-center">
                <Container className="favoriteModule bg-dark rounded">
                    <h1>Favorites</h1>
                    <Container>
                        <ListGroup className="list-group list-group-hover" defaultActiveKey="#link1">
                            {locations.length && favorites.map(favorite => {
                                let location = locations.find(location => location.locationId === favorite.favoriteLocationId)
                                return (<ListGroup.Item key={location.locationId} className="list-group-item"
                                                        variant="secondary" action href="#link1">
                                    {location.locationName}
                                </ListGroup.Item>)

                            })}
                        </ListGroup>
                    </Container>
                </Container>
            </div>
        </>
    )
}
