import {Location} from "../interfaces/Location";
import {connect} from "../database.util";
import {User} from "../interfaces/User";
import {Status} from "../interfaces/Status";
import {RowDataPacket} from "mysql2"

export async function selectAllLocations(): Promise<Location[]> {
    try {
        const mysqlConnection = await connect()
        const mysqlQuery = 'SELECT BIN_TO_UUID(locationId) AS locationId, locationDateCreated, locationDescription, locationLat, locationLng, locationName FROM location'
        const result = await mysqlConnection.execute(mysqlQuery) as RowDataPacket[]
        mysqlConnection.release()
        return result[0] as Array<Location>
    } catch (error) {
        throw error
    }
}
