import React from 'react';
import * as Yup from 'yup'
import {Formik, FormikConsumer} from "formik";
import {httpConfig} from "../shared/utils/httpConfig";
import {values} from "lodash";
import {Col, Container, Row} from "react-bootstrap";
import {ImageDropZone} from "../shared/components/ImageDropZone";
import {FormDebugger} from "../shared/components/FormDebugger";


export function ImageUploader(props) {

    const {imageUserId, locations} = props
    console.log(imageUserId)
    console.log(locations)
    const validationObject = Yup.object().shape({
        imageLocationId: Yup.string()
            .required('Please select a location').uuid('Please select a valid location'),
        imageUrl: Yup.mixed().required("Images required")

    })

    function submitImage(values, {resetForm, setStatus}) {


        httpConfig.post(`/apis/image/upload/`, values.imageUrl)
            .then(reply => {
                    let {message, type} = reply
                    if (reply.status === 200) {
                        submitImage({...values, imageUserId, imageUrl: message})
                    } else {
                        setStatus({message, type});
                    }
                }
            );

        function submitImage(image) {
            httpConfig.post(`/apis/image/`, image)
                .then(reply => {
                    let {message, type} = reply
                    if (reply.status === 200) {
                        resetForm()
                    }
                    setStatus({message, type});
                    return (reply)
                })
        }

    }

    const initialValues = {
        imageLocationId: '',
        imageUrl: '',

    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitImage}
            validationSchema={validationObject}
        >
            {
                (props) => {
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
                        handleReset,
                    } = props;

                    return (
                        <>
                            <Container className="uploadBody">
                                <Container>
                                    <Row>
                                        <Col xs={0} md={1} lg={3}>

                                        </Col>
                                        <Col xs={12} md={10} lg={6}>

                                            <form className="formContainer bg-primary rounded-3 w-100" onSubmit={handleSubmit}>
                                                <ImageDropZone
                                                    formikProps={{
                                                        values,
                                                        handleChange,
                                                        handleBlur,
                                                        setFieldValue,
                                                        fieldValue: "imageUrl"
                                                    }}
                                                />
                                                <Row className="m-3">
                                                    <Col lg={3} md={5} sm={6}>
                                                        <label htmlFor="locationForm" className="labelItem"/>
                                                        Location:
                                                    </Col>
                                                    <Col lg={9} md={7} sm={6}>
                                                        {/*<input id="locationForm" type="select" name="locationForm"*/}
                                                        {/*       placeholder="Location"*/}
                                                        {/*       aria-label="locationForm"/>*/}
                                                        <select name="imageLocationId" className="form-select" onBlur={handleBlur} onChange={handleChange} value={values.locationId}
                                                                id="imageLocationId">
                                                            {/*{console.log(locations)}*/}
                                                          <option value="" disabled selected>Select your option</option>
                                                            {locations.map(location => <option
                                                                value={location.locationId}>{location.locationName}</option>)}
                                                        </select>
                                                    </Col>
                                                </Row>
                                                <div className="text-center m-3">
                                                    <button type="submit" className="btn btn-primary">Upload Picture
                                                    </button>
                                                </div>




                                            </form>
                                            <FormDebugger {...props}/>

                                        </Col>
                                        <Col xs={0} md={1} lg={12}>

                                        </Col>
                                    </Row>
                                </Container>
                            </Container>
                        </>
                    )
                }
            }
        </Formik>
    )
}

// export const ImageFormContent = (props) => {
//     const {
//         setFieldValue,
//         status,
//         values,
//         errors,
//         touched,
//         dirty,
//         isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         handleReset,
//         locations
//     } = props;
//
//     return (
//         <>
//             <Container className="uploadBody">
//                 <Container>
//                     <Row>
//                         <Col xs={0} md={1} lg={3}>
//
//                         </Col>
//                         <Col xs={12} md={10} lg={6}>
//                             <ImageDropZone
//                                 formikProps={{
//                                     values,
//                                     handleChange,
//                                     handleBlur,
//                                     setFieldValue,
//                                     fieldValue:"profileAvatarUrl"
//                                 }}
//                             />
//                             <form className="formContainer bg-primary rounded-3 w-100" action="./apis/"
// method="post" noValidate> <Row className="m-3"> <Col lg={3} md={5} sm={6}> <label htmlFor="locationForm"
// className="labelItem"/> Location: </Col> <Col lg={9} md={7} sm={6}> <input id="locationForm" type="text"
// name="locationForm" placeholder="Location" aria-label="locationForm"/> </Col> </Row> </form> <div
// className="text-center m-3"> <button type="button" className="btn btn-primary">Upload Picture</button> </div> </Col>
// <Col xs={0} md={1} lg={12}>  </Col> </Row> </Container> </Container> </> ) };