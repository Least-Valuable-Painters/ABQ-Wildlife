import React from 'react';
import * as Yup from 'yup'
import {Formik, FormikConsumer} from "formik";
import {httpConfig} from "../shared/utils/httpConfig";
import {values} from "lodash";
import {Col, Container, Row} from "react-bootstrap";
import {ImageDropZone} from "../shared/components/ImageDropZone";


export function ImageUploader(props) {
    const {imageUserId} = props

    const validationObject = Yup.object().shape({
        imageLocationId: Yup.string()
            .required('Please select a location')
    })

    function submitImage(value, {resetForm, setStatus}) {

        const submitImage = (image) => {
            httpConfig.post(`/apis/image/`, image)
            .then(reply => {
                let {message, type} = reply
                if (reply.status === 200) {
                    resetForm()
                }
                setStatus({message, type});
                return (reply)
            })
        };

        if (values.imageURL !== undefined) {
            httpConfig.post(`/apis/image-upload/`, values.imageURL)
                .then(reply => {
                        let {message, type} = reply
                        if (reply.status === 200) {
                            submitImage({...values, imageUserId, imageURL: message})
                        } else {
                            setStatus({message, type});
                        }
                    }
                );
        }
    }

    return (
        <Formik
            initialValues={''}
            onSubmit={submitImage}
            validationSchema={validationObject}
        >
            {ImageFormContent}
        </Formik>
    )
}

export const ImageFormContent = (props) => {
    const {
        setFieldValue,
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    return (
        <>
            <Container className="uploadBody">
                <Container>
                    <Row>
                        <Col xs={0} md={1} lg={3}>

                        </Col>
                        <Col xs={12} md={10} lg={6}>
                            <ImageDropZone
                                formikProps={{
                                    values,
                                    handleChange,
                                    handleBlur,
                                    setFieldValue,
                                    fieldValue:"profileAvatarUrl"
                                }}
                            />
                            <form className="formContainer bg-primary rounded-3 w-100" action="./apis/" method="post" noValidate>
                                <Row className="m-3">
                                    <Col lg={3} md={5} sm={6}>
                                        <label htmlFor="locationForm" className="labelItem"/>
                                        Location:
                                    </Col>
                                    <Col lg={9} md={7} sm={6}>
                                        <input id="locationForm" type="text" name="locationForm"
                                               placeholder="Location"
                                               aria-label="locationForm"/>
                                    </Col>
                                </Row>
                            </form>
                            <div className="text-center m-3">
                                <button type="button" className="btn btn-primary">Upload Picture</button>
                            </div>
                        </Col>
                        <Col xs={0} md={1} lg={12}>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
};