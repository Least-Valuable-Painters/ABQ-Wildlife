import {Schema} from 'express-validator';

export const commentValidator : Schema = {
    tweetProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid CommentProfileId'
        }
    },
    tweetContent: {
        isLength: {
            errorMessage: 'a comment cannot be longer than 420 characters',
            options: { max: 420 }
        },
        trim: true,
        escape: true
    },
    tweetDate: {
        toDate: true
    }
};
