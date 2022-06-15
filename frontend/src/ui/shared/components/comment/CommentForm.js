import React from 'react';
import {httpConfig} from "../../utils/httpConfig";
import * as Yup from "yup";
import {Formik} from "formik";
import {CommentFormContent} from "./CommentFormContent";
import { useSelector, useDispatch } from 'react-redux'
import {fetchAllComments} from "../../../../store/comment";

export const CommentForm = () => {
    const comment = {
        commentContent: "",
    };

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth ? state.auth : null);

    const validator = Yup.object().shape({
        commentContent: Yup.string()
            .required("Comment content is required"),
    });
    const message = comment.commentContent

    const submitComment = (values, {resetForm, setStatus}) => {
        const commentUserId = auth?.userId ?? null
        console.log(message)
        const comment = {commentUserId, ...values}
        httpConfig.post("/apis/comment/", comment)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                        dispatch(fetchAllComments())
                    }
                    setStatus({message, type});
                }
            );
    };


    return (
        <Formik
            initialValues={comment}
            onSubmit={submitComment}
            validationSchema={validator}
        >
            {CommentFormContent}
        </Formik>

    )
};