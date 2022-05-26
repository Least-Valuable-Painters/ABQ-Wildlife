import {Schema} from 'express-validator'

export const imageValidator : Schema = {
    imageUserId: {
        isUUID: {
            errorMessage: 'please provide a valid imageUserId'
        }
    },
    imageDate: {
        toDate: true
    }
};