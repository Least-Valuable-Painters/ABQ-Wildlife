import {Favorite} from "../interfaces/Favorite";
import {connect} from "../database.util"

export async function insertFavorite(favorite: Favorite): Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO `favorite`(favoriteLocationId, favoriteUserId) VALUES (UUID_TO_BIN(:favoriteLocationId), UUID_TO_BIN(:favoriteUserId))";
        await mySqlConnection.execute(mySqlQuery, favorite)
        mySqlConnection.release()
        return "Favorite saved successfully"
    } catch(error) {
        throw error
    }
}