import {Schema} from 'express-validator'

export const imageValidator : Schema = {

    imageLocationId: {
        isUUID: {
            errorMessage: 'please provide a valid imageLocationId'
        }
    },
    imageUserId: {
        isUUID: {
            errorMessage: 'please provide a valid imageUserId'
        }
    },
    imageCloudinaryId: {
        isLength: {
            errorMessage: 'an image Cloudinary Id cannot be longer than 255 characters',
            options: { max: 255 }
        },
        trim: true,
        escape: true
    },
    imageUrl: {
        isLength: {
            errorMessage: 'an image url cannot be longer than 255 characters',
            options: { max: 255 }
        },
        trim: true,
        isURL: {errorMessage: "Url required"}
    }
};
