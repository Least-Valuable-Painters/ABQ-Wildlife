import { NextFunction , Request, Response } from 'express';
import {selectAllImages} from "../../utils/image/selectAllImages";
import {selectImagesByImageUserId} from "../../utils/image/selectImagesByImageUserId";
import {selectImagesByImageId} from "../../utils/image/selectImagesByImageId";
import {Status} from "../../utils/interfaces/Status";
import {uploadToCloudinary} from "../../utils/cloudinary.utils";
import {insertImage} from "../../utils/image/insertImage";
import {Image} from "../../utils/interfaces/Image"
import {User} from "../../utils/interfaces/User";

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
    // async function selectImagesByImageId(imageId: string) {
    //
    // }

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
    console.log("HEloo")
    try {

        const {imageLocationId, imageCloudinaryId, imageUrl} = request.body;
        const user : User = request.session.user as User
        const imageUserId : string = <string>user.userId

        const image: Image = {
            imageId: null,
            imageLocationId,
            imageUserId,
            imageCloudinaryId,
            imageDateCreated: null,
            imageUrl
        }
        const result = await insertImage(image)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error:any) {
        return  response.json({
            status: 500,
            message: error.message,
            data: null
        });
    }
}


export async function uploadImageController(request: Request, response: Response) : Promise<Response<Status>> {
    console.log(request.file)
    try {
        if (request.file === undefined) {
            throw new Error('Please provide a valid file type') //NOT TOO SURE ABOUT THIS
        }
        // @ts-ignore
        const message : string = await uploadToCloudinary(request.file)
        const status: Status = {
            status: 200,
            message: message,
            data: null
        };
        console.log(message)
        return response.json(status);


    } catch(error:any) {
        console.log(error)
        return  response.json({
            status: 500,
            message: error.message,
            data: null
        });
    }
}

