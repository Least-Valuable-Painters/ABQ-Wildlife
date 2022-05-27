import {Schema} from 'express-validator'

export const locationValidator : Schema = {
    locationId: {
        isUUID: {
            errorMessage: 'please provide a valid locationId'
        }
    },
};
