import {Schema} from 'express-validator';

export const commentValidator : Schema = {
    commentUserId: {
        isUUID: {
            errorMessage: 'please provide a valid CommentProfileId'
        }
    },
    commentContent: {
        isLength: {
            errorMessage: 'a comment cannot be longer than 420 characters',
            options: { max: 420 }
        },
        trim: true,
        escape: true
    },
    commentDate: {
        toDate: true
    }
};
