import React, {useEffect} from 'react'
import {ImageUploader} from "./ImageUploader";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../store/auth";

export const Image = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAuth());
    };
    const inputs = [];
    useEffect(effects, inputs);

    return (
        <>
            {auth && <ImageUploader imageProfileId={auth.userId}/>}
        </>
    )
}