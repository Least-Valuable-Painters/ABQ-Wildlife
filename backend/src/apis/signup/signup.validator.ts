import {Schema} from 'express-validator';

export const signupValidator: Schema= {
    userName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'username must be between 1 and 128 characters',
            options: {min:1, max: 128}
        }
    },
    userEmail: {
        isEmail: {
            errorMessage: "please provide a valid email address"
        },
        //normalizeEmail: true,
        trim: true
    },
    userPassword: {
        isLength: {
            errorMessage: 'Password must be at least 8 characters',
            options: {min: 8}
        },
        trim: true,
        escape: true
    },
    userIsAdmin: {
        isBoolean: true
    }
}