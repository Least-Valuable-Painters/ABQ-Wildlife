import {Schema} from 'express-validator'

export const locationValidator : Schema = {
    locationId: {
        isUUID: {
            errorMessage: 'please provide a valid locationId'
        }
    },
    locationDescription: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'location description must be between 1 and 128 characters',
            options: {min:1, max: 128}
        }
    },
    locationLat: {
        isFloat: {
            options: {min: -90, max: 90}
        }

    },
    locationLng: {
        isFloat: {
            options: {min: -180, max: 180}
        }
    },
    locationName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'location name must be between 1 and 255 characters',
            options: {min:1, max: 255}
        }
    }
};
