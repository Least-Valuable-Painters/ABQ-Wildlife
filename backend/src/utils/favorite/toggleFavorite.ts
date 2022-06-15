import {Favorite} from "../interfaces/Favorite";
import {connect} from "../database.util";


export async function toggleFavorite(favorite: Favorite) : Promise<string> {
    try {
        console.log('favorite', favorite)
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(favoriteLocationId) as favoriteLocationId, BIN_TO_UUID(favoriteUserId) as favoriteUserId FROM `favorite` WHERE favoriteLocationId = UUID_TO_BIN(:favoriteLocationId) AND favoriteUserId = UUID_TO_BIN(:favoriteUserId)';
        const [favoriteRows] = await mysqlConnection.execute(mySqlSelectQuery, favorite)
        console.log('favoriteRows', favoriteRows)
        // @ts-ignore
        if (favoriteRows[0]) {
            const mysqlConnection = await connect()
            const mySqlDelete = 'DELETE FROM `favorite` WHERE favoriteLocationId = UUID_TO_BIN(:favoriteLocationId) AND favoriteUserId = UUID_TO_BIN(:favoriteUserId)'
            const [deleteRows] = await mysqlConnection.execute(mySqlDelete, favorite)
            console.log('Favorite has been removed')
            mysqlConnection.release()

        }else {
            const mysqlConnection = await connect()
            const mySqlQuery = 'INSERT INTO `favorite`(favoriteLocationId, favoriteUserId) VALUES (UUID_TO_BIN(:favoriteLocationId), UUID_TO_BIN(:favoriteUserId))';
            const [rows] = await mysqlConnection.execute(mySqlQuery, favorite)
            console.log('Favorite has been saved')
            mysqlConnection.release()
        }

        return "Favorite toggled successfully"
    } catch (error) {
        throw error
    }
}