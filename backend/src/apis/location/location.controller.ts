import { NextFunction , Request, Response } from 'express';

import {Location} from '../../utils/interfaces/Location';
import {User} from '../../utils/interfaces/User';
import {insertLocation} from "../../utils/location/insertLocation";
import {selectLocationByLocationId} from "../../utils/location/selectlocationBylocationId";
import {Status} from "../../utils/interfaces/Status";
import {selectAllLocations} from "../../utils/location/selectAllLocations";

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


        const {locationDescription, locationLat, locationLng, locationName} = request.body;


        const location: Location = {
            locationId: null,
            locationDateCreated: null,
            locationDescription,
            locationLat,
            locationLng,
            locationName
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
