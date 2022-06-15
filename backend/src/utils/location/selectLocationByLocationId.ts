import {connect} from "../database.util";
import {RowDataPacket} from "mysql2";
import {Location} from "../interfaces/Location";

export async function selectLocationByLocationId(locationId: string): Promise<Location|null> {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = "SELECT BIN_TO_UUID(locationId) AS locationId, locationDateCreated, locationDescription, locationLat, locationLng, locationName FROM location WHERE locationId = UUID_TO_BIN(:locationId)"
        const result = await mysqlConnection.execute(sqlQuery, {locationId}) as RowDataPacket[]
        const location: Array<Location> = result[0] as Array<Location>
        mysqlConnection.release()
        return location.length === 1 ? {...location[0]} : null;
    } catch (error) {
        throw error
    }
}
