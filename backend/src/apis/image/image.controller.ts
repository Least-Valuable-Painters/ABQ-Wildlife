import { NextFunction , Request, Response } from 'express';

import {Image} from '../../utils/interfaces/Image';
import {User} from '../../utils/interfaces/User';
import {insertImage} from "../../utils/image/insertImage";
import {selectAllImages} from "../../utils/image/selectAllImages";
import {selectImageByImageId} from "../../utils/image/selectImageByImageId";
import {selectImagesByImageUserId} from "../../utils/image/selectImagesByImageUserId";
import {Status} from "../../utils/interfaces/Status";

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
    async function selectImagesByImageId(imageId: string) {

    }

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

        const {imageCloudinaryId, imageDateCreated, imageUrl} = request.body;
        const user : User = request.session.user as User
        const imageUserId : string = <string>user.userId

        const image: Image = {
            imageId: null,
            imageLocationId: null,
            imageUserId,
            imageCloudinaryId,
            imageDateCreated,
            imageUrl
        }
        const result = await insertImage(image)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "Error Creating image try again later.",
            data: null
        });
    }
}


