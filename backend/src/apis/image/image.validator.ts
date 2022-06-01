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
};