import {httpConfig} from "./shared/utils/httpConfig";
import {Button} from "react-bootstrap";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFavoritesByFavoriteUserId} from "../store/favorite";

export const FavoriteButton = ({location, auth}) => {
        const favorite = useSelector(state => state ?.favorite[location.locationId] ? state?.favorite[location.locationId] : null)
        const dispatch = useDispatch()
        const effects = () => {
          dispatch(fetchFavoritesByFavoriteUserId(auth.userId))
        }
        useEffect(effects, [dispatch])
      console.log(auth)
      console.log(favorite)
    const clickFavorite = () => {
        httpConfig.post('/apis/favorite/', {favoriteLocationId: location.locationId, favoriteUserId: auth.userId})
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    console.log("favorite added")
                  dispatch(fetchFavoritesByFavoriteUserId(auth.userId))
                }

            });
    };
    return (
        <>
            <button onClick={clickFavorite}><span role="img" aria-label="heart emoji">&#9825; {favorite === null ? "favorite this location" : "un-favorite this location"}️</span></button>
        </>
    )
}