import {Schema} from 'express'

export const signInValidator : Schema = {
    userPassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: {min: 8}
        },
        trim: true,
        escape: true
    },
    userEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email address.'
        },
        // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
        // normalizeEmail: true,
        trim: true
    }
},