import React from 'react';
import {FormikConsumer} from "formik";


export function ImageUploader() {
    const validationObject = Yup.object().shape({
        locationName: Yup.string()
            .min(1, 'location name is required')
            .max(255, 'location has to be less than 255 characters'),

        locationDescription: Yup.string()
            .min(1, 'please describe the location')
            .max(128, 'please restrict your description to 128 characters'), //think about changing the varchar to 255
    })
}
function submitImage (value, {resetForm, setStatus}) {

    const submitImage = (updatedImage) => {
        httpConfig.post(`/apis/image/${image.imageId}`), updatedImage)
            .then(reply => {
            let {message, type} = reply
            if (reply.status === 200) {
                resetForm()
            }
            setStatus({message, type})
            return (reply)
        })
    }

    if (values.imageURL !=== undefined) {
        httpConfig.post(`/apis/image-upload/`, values.imageURL)
            .then(reply => {
                let {message, type} = reply
                if (reply.status === 200) {
                    submitImage({...values, imageURL: message})
                } else {
                    setStatus({message, type})
                }
            }
        )
    } else {
        submitImage(values)
    }
}

return (
    <Formik
        initialValues={image}
        onSubmit={submitEditedImage}
        validationSchema={validationObject}
        >
        {EditImageFormContent}
    </Formik>
)
