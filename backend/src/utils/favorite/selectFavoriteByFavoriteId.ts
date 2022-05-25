import {Favorite} from "../interfaces/Favorite";
import {connect} from "../database.util";
import {RowDataPacket} from "mysql2";

export async function selectFavoriteByFavoriteId(favorite: Favorite): Promise<Favorite|null> {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(favoriteUserId) as favoriteUserId, favoriteLocationId from `favorite` WHERE favoriteUserId = UUID_TO_BIN(:favoriteUserId)';
        const result : RowDataPacket[]= await mysqlConnection.execute(mySqlSelectQuery, favorite) as RowDataPacket[]
        const rows: Favorite[] = result[0] as Favorite[]
        return rows.length !== 0 ? {...rows[0]} : null;
    } catch(error) {
        throw error
    }
}