import React, {useEffect} from 'react'
import {ImageUploader} from "./ImageUploader";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../store/auth";
import {fetchAllLocations} from "../../store/location";

export const Image = () => {
    const auth = useSelector(state => state.auth);
    const locations = useSelector(state => state.location ? state.location : []);
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAuth());
        dispatch(fetchAllLocations())
    };
    const inputs = [];
    useEffect(effects, inputs);

    return (
        <>
            {auth && locations && <ImageUploader imageUserId={auth.userId} locations={locations}/>}
        </>
    )
}