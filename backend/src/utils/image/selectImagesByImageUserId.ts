import {Image} from "../interfaces/Image";
import {connect} from "../database.util";
import {RowDataPacket} from "mysql2";

export async function selectImagesByImageUserId(imageUserId: string) : Promise<Image[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(imageId) AS BIN_TO_UUID (imageUserId) AS imageUserId, userActivationToken, userName, userEmail, userHash, userIsAdmin'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {imageUserId})
        mySqlConnection.release()
        return result[0] as Image[]
    } catch (error) {
        throw (error)
    }

}