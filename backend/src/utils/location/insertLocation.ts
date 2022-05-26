import {connect} from "../database.util";
import {Location} from "../interfaces/Location";

export async function insertLocation(location: Location) : Promise<string> {
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO location(locationId, locationDateCreated, locationDescription,  locationLat,  locationLng, locationName) VALUES (UUID_TO_BIN(UUID()), :locationId)';
        await mysqlConnection.execute(query, location);
        await mysqlConnection.end()
        return 'Location assigned successfully.'
    }catch (error) {
        throw error
    }
}
