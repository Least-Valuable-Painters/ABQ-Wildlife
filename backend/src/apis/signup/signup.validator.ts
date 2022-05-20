import {Schema} from 'express-validator';

export const signupValidator: Schema= {
    userUsername: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'userAtHandle must be between 1 and 128 characters',
            options: {min:1, max: 32}
        }
    },
    userEmail: {
        isEmail: {
            errorMessage: "please provide a valid email address"
        },
        normalizeEmail: true,
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