import { NextFunction , Request, Response } from 'express';
import {selectAllImages} from "../../utils/image/selectAllImages";
import {selectImagesByImageUserId} from "../../utils/image/selectImagesByImageUserId";
import {Status} from "../../utils/interfaces/Status";
import {uploadToCloudinary} from "../../utils/cloudinary.utils";

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

        const message : string = await uploadToCloudinary(request)
        const status: Status = {
            status: 200,
            message: message,
            data: null
        };
        console.log(message)
        return response.json(status);

        // const {imageCloudinaryId, imageUrl} = message;
        // const {imageLocationId} = request.body;
        // const user : User = request.session.user as User
        // const imageUserId : string = <string>user.userId
        //
        // const image: Image = {
        //     imageId: null,
        //     imageLocationId,
        //     imageUserId,
        //     imageCloudinaryId,
        //     imageDateCreated: null,
        //     imageUrl
        // }
        // const result = await insertImage(image)
        // const status: Status = {
        //     status: 200,
        //     message: result,
        //     data: null
        // };
        // return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "Error Creating image try again later.",
            data: null
        });
    }
}

export async function imageUploadController (request: Request, response: Response): Promise<Response> {
    try {
        if (request.file === undefined) {
            throw new Error('Please provide a valid file type')
        }
        const message: string = await uploadToCloudinary(request.file)
        return response.json({ status: 200, data: null, message: message})
    }   catch (error: any) {
        return response.json({ status: 400, message: error.message, data: null})
        }
}


