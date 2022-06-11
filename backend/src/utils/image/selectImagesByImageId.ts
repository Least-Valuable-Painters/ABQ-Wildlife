import {connect} from "../database.util";
import {RowDataPacket} from "mysql2";
import {Image} from "../interfaces/Image";

export async function selectImagesByImageId(imageId: string): Promise<Image|null> {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = "SELECT BIN_TO_UUID(imageId) AS imageId, BIN_TO_UUID(imageLocationId) AS imageLocationId, BIN_TO_UUID (imageUserId) AS imageUserId, imageCloudinaryId, imageDateCreated, imageUrl FROM image WHERE imageId = UUID_TO_BIN(:imageId)"
        const result = await mysqlConnection.execute(sqlQuery, {imageId}) as RowDataPacket[]
        const images: Array<Image> = result[0] as Array<Image>
        return images.length === 1 ? {...images[0]} : null;
    } catch (error) {
        throw error
    }
}
