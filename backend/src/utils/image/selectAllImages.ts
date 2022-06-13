import {Image} from "../interfaces/Image";
import {connect} from "../database.util";
import {User} from "../interfaces/User";
import {RowDataPacket} from "mysql2";

export async function selectAllImages() : Promise<Image[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID (imageId) AS imageId, BIN_TO_UUID (imageUserId) AS imageUserId, BIN_TO_UUID (imageLocationId) AS imageLocationId, imageCloudinaryId, imageDateCreated, imageUrl FROM image'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Image>
    } catch (error) {
        throw error
    }
}