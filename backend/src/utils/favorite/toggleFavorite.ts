import {Favorite} from "../interfaces/Favorite";
import {connect} from "../database.util";


export async function toggleFavorite(favorite: Favorite) : Promise<string> {
    try {
        console.log('favorite', favorite)
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(favoriteUserId) as favoriteUserId, BIN_TO_UUID(favoriteLocationId) as favoriteLocationId FROM `favorite` WHERE favoriteUserId = UUID_TO_BIN(:favoriteUserId) AND favoriteLocationId = UUID_TO_BIN(:favoriteLocationId)';
        const [favoriteRows] = await mysqlConnection.execute(mySqlSelectQuery, favorite)
        console.log('favoriteRows', favoriteRows)
        // @ts-ignore
        if (favoriteRows[0]) {
            const mysqlConnection = await connect()
            const mySqlDelete = 'DELETE FROM `favorite` WHERE favoriteUserId = UUID_TO_BIN(:favoriteUserId) AND favoriteLocationId = UUID_TO_BIN(:favoriteLocationId)'
            const [deleteRows] = await mysqlConnection.execute(mySqlDelete, favorite)
            console.log('Favorite has been removed')

        }else {
            const mysqlConnection = await connect()
            const mySqlQuery = 'INSERT INTO `favorite`(favoriteLocationId, favoriteUserId) VALUES (UUID_TO_BIN(:favoriteUserId), UUID_TO_BIN(:favoriteLocationId), NOW())';
            const [rows] = await mysqlConnection.execute(mySqlQuery, favorite)
            console.log('Favorite has been saved')
        }

        return "Favorite toggled successfully"
    } catch (error) {
        throw error
    }
}