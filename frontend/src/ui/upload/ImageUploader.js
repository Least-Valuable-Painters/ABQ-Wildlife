import React from 'react';


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
