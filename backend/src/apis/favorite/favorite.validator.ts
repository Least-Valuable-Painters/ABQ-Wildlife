import {Schema} from 'express-validator';

export const favoriteValidator : Schema = {
    favoriteLocationId: {
        isUUID: {
            errorMessage: 'please provide a valid favoriteLocationId'
        }
    },
    favoriteUserId: {
        isUUID: {
            errorMessage: 'please provide a valid favoriteUserId'
        }
    }
};