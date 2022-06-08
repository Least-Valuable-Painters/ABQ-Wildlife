import React from 'react'
import {useDispatch} from "react-redux";
import * as Yup from 'yup'
import {Form, Formik} from "formik";
import {FormControl, InputGroup} from "react-bootstrap";

export function PostForm() {
    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        locationForm: Yup.string()
            .required('A location is required')
            .max(64, 'Location must be 64 characters or less.'),
        titleForm: Yup.string()
            .required('A title is required')
            .max(64, 'Title must be 64 characters or less.'),
        descriptionForm: Yup.string()
            .max('Description must be 576 characters or less.')
    })

    const handleSubmit = (values, {resetForm, setStatus}) => {
        httpConfig.post('/apis/location', values).then(reply => {
            const {message, type, status} = reply
            if (status === 200) {
                resetForm()
                dispatch(fetchLocation())
            }
            setStatus({message, type})
        })
    }
    const location = {
        location: '',
        title: '',
        description: ''
    }

    return (
        <>
            <Formik
                initialValues={location}
                onSubmit={handleSubmit}
                validationSchema={validator}
            >

            </Formik>
        </>
    )
}

function PostFormContent(props) {
    const {
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
    } = props

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup>
                        <FormControl
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='Location'
                            values={values.locationForm} //
                            name='locationForm'
                        />
                    </InputGroup>
                    {errors.locationForm && touched.locationForm &&
                        <>
                            <div className="alert alert-danger">
                                {errors.locationForm} //
                            </div>
                        </>
                    }
                </Form.Group>
                <Form.Group>
                    <InputGroup>
                        <FormControl
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='submitter' //
                            values={values.locationSubmitter} //
                            name='locationSubmitter'
                        />
                    </InputGroup>
                    {errors.locationSubmitter && touched.locationSubmitter &&
                        <>
                            <div className="alert alert-danger">
                                {errors.locationSubmitter}
                            </div>
                        </>}
                </Form.Group>
                <Form.Group>
                    <InputGroup>
                        <FormControl
                            as='textarea'
                            placeholder='Meow meow meow goes here'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.descriptionForm}
                            name='description'
                        />
                    </InputGroup>
                    {errors.descriptionForm && touched.descriptionForm &&
                        <>
                            <div className="alert alert-danger">
                                {errors.descriptionForm}
                            </div>
                        </>
                    }
                </Form.Group>
                <FormDebugger {...props}/>
            </Form>
            {status && <div className={status.type}>{status.message}</div>}
        </>
    )
}