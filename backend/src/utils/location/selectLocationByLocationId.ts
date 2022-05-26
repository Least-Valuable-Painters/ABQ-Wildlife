import {Location} from "../interfaces/Location";
import {connect} from "../database.util";
import {RowDataPacket} from "mysql2";

export async function selectLocationByLocationId(locationId: string) : Promise<Location[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(locationId) AS BIN_TO_UUID (locationId) AS locationId, locationDateCreated, locationDescription, locationLat, locationLng, locationName'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {locationId})
        return result[0] as Location[]
    } catch (error) {
        throw (error)
    }

}
