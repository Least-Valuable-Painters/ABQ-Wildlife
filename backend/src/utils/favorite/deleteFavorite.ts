import {connect} from "../database.util";
import {Favorite} from "../interfaces/Favorite";

export async function deleteFavorite(favorite: Favorite) {
    try {
        const mysqlConnection = await connect()
        const mysqlDelete = 'DELETE FROM `favorite` WHERE favoriteLocationId = UUID_TO_BIN(:favoriteLocationId) AND favoriteUserId = UUID_TO_BIN(:favoriteUserId)'
        const [result] = await mysqlConnection.execute(mysqlDelete, favorite)
        return "Favorite successfully deleted"
    } catch (error) {
        throw error
    }
}