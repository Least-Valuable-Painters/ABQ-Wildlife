import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Comment} from '../../utils/interfaces/Comment';
import {User} from "../../utils/interfaces/User";
import {insertComment} from "../../utils/comment/insertComment";
import {selectAllComments} from "../../utils/comment/selectAllComments";
import {selectCommentByCommentUserId} from "../../utils/comment/selectCommentByCommentUserId";
import {selectCommentByCommentId} from '../../utils/comment/selectCommentByCommentId';
import {Status} from "../../utils/interfaces/Status";

export async function getAllCommentsController(request: Request, response: Response): Promise<Response<Status>> {

    try {
        const data = await selectAllComments()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getCommentsByCommentUserIdController(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const {commentUserId} = request.params
        const data  = await selectCommentByCommentUserId(commentUserId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getCommentByCommentIdController(request : Request, response: Response, nextFunction: NextFunction) : Promise<Response<Status>>{
    try {
        const {commentId} = request.params
        const data  = await selectCommentByCommentId(commentId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function postComment(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {commentContent, commentImageId} = request.body;
        const user : User = request.session.user as User
        const commentUserId : string = <string>user.userId

        const comment: Comment = {
            commentId: null,
            commentImageId,
            commentUserId,
            commentContent,
            commentDate: null
        }
        const result = await insertComment(comment)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "Error Creating comment try again later.",
            data: null
        });
    }
}