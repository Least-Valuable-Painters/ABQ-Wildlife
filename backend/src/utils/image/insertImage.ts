import {connect} from "../database.util";
import {Image} from "../interfaces/Image";

export async function insertImage(image: Image) : Promise<string> {
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO image(imageId, imageLocationId, imageUserId,  imageCloudinaryId,  imageDateCreated, imageUrl) VALUES (UUID_TO_BIN(UUID()), :imageLocationId, :imageUserId, :imageCloudinaryId, :imageDateCreated, :imageUrl)';
        await mysqlConnection.execute(query, image);
        await mysqlConnection.end()
        return 'Image uploaded successfully.'
    }catch (error) {
        throw error
    }
}