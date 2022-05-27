import { NextFunction , Request, Response } from 'express';

import {Location} from '../../utils/interfaces/Location';
import {User} from '../../utils/interfaces/User';
import {insertLocation} from "../../utils/location/insertLocation";
import {selectLocationByLocationId} from "../../utils/location/selectlocationBylocationId";
import {Status} from "../../utils/interfaces/Status";

export async function getAllLocationsController(request: Request, response: Response): Promise<Response | undefined> {

    try {
        const data = await selectAllLocations()

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

export async function getLocationByLocationIdController(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const {locationId} = request.params
        const data = await selectLocationByLocationId(locationId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getLocationsByLocationIdController(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    async function selectLocationsByLocationId(locationId: string) {

    }

    try {
        const {locationId} = request.params
        const data = await selectLocationsByLocationId(locationId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function postLocation(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {locationId} = request.body;
        const user : User = request.session.user as User
        const locationUserId : string = <string>user.userId

        const location: Location = {
            locationId: string|null,
            locationDateCreated: Date|null,
            locationDescription: string,
            locationLat: number,
            locationLng: number,
            locationName: string,
            }
        const result = await insertLocation(location)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "Error Creating location try again later.",
            data: null
        });
    }
}
