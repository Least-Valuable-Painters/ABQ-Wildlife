import {connect} from "../database.util";
import {Image} from "../interfaces/Image";

export async function insertImage(image: Image) : Promise<string> {
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO image(imageId, imageLocationId, imageUserId,  imageCloudinaryId,  imageDateCreated, imageUrl) VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN(:imageLocationId), UUID_TO_BIN(:imageUserId), :imageCloudinaryId, NOW(), :imageUrl)';
        await mysqlConnection.execute(query, image);
        await mysqlConnection.release()
        return 'Image uploaded successfully.'
    }catch (error) {
        throw error
    }
}
