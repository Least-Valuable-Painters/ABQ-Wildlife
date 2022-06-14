import {httpConfig} from "./shared/utils/httpConfig";
import {Button} from "react-bootstrap";
import React from "react";
import {useDispatch} from "react-redux";

export const FavoriteButton = ({location, auth}) => {

        const dispatch = useDispatch()

    const clickFavorite = () => {
        httpConfig.post('/apis/favorite/', {favoriteLocationId: location.locationId, favoriteUserId: auth.userId})
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    console.log("favorite added")
                }

            });
    };
    return (
        <>
            <button onClick={clickFavorite}><span role="img" aria-label="heart emoji">&#9825;️</span></button>
        </>
    )
}