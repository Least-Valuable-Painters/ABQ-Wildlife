import {Schema} from 'express-validator';

export const signupValidator: Schema= {
    userAtHandle: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'userAtHandle must be between'
        }
    }
}