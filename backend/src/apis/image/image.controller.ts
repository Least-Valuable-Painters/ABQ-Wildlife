import { NextFunction , Request, Response } from 'express';

import {Image} from '../../utils/interfaces/Image';
import {User} from '../../utils/interfaces/User';
import {insertImage} from "../../utils/image/insertImage";
import {selectAllImages} from "../../utils/image/selectAllImages";
import {selectImageByImageId} from "../../utils/image/selectImageByImageId";
import {selectImagesByImageUserId} from "../../utils/image/selectImagesByImageUserId";

export async function getAllImagesController(request: Request, response: Response): Promise<Response | undefined> {

    try {
        const data = await selectAllImages()

        const status: Status = {status: 200, message: null, data};
        return response.json(status);

    } catch (error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })

    }
}

export async function getImagesByImageUserIdController(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const {imageUserId} = request.params
        const data = await selectImagesByImageUserId(imageUserId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getImagesByImageIdController(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const {imageId} = request.params
        const data = await selectImagesByImageId(imageId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function postImage(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {tweetContent} = request.body;
        const profile : Profile = request.session.profile as Profile
        const tweetProfileId : string = <string>profile.profileId

        const tweet: Tweet = {
            tweetId: null,
            tweetProfileId,
            tweetContent,
            tweetDate: null
        }
        const result = await insertTweet(tweet)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "Error Creating tweet try again later.",
            data: null
        });
    }
}


