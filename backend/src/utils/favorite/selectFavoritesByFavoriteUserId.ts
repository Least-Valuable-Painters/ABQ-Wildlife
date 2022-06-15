import {Favorite} from "../interfaces/Favorite";
import {connect} from "../database.util";
import {RowDataPacket} from "mysql2";

export async function selectFavoritesByFavoriteUserId(favoriteUserId: string): Promise<Favorite[]> {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(favoriteLocationId) as favoriteLocationId, favoriteUserId from `favorite` WHERE favoriteUserId = UUID_TO_BIN(:favoriteUserId)';
        const result : RowDataPacket[]= await mysqlConnection.execute(mySqlSelectQuery, {favoriteUserId}) as RowDataPacket[]
        mysqlConnection.release()
        return result[0] as Favorite[]
    } catch(error) {
        throw error
    }
}