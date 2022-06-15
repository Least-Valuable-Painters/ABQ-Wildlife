import {connect} from "../database.util";
import {RowDataPacket} from "mysql2";
import {User} from "../interfaces/User";

export async function selectWholeUserByUserId(userId: string): Promise<User|null> {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = "SELECT BIN_TO_UUID(userId) as userId, userActivationToken, userName, userEmail, userHash, userIsAdmin FROM user WHERE userId = UUID_TO_BIN(:userId)"
        const result = await mysqlConnection.execute(sqlQuery, {userId}) as RowDataPacket[]
        const rows: User[] = result[0] as User[]
        mysqlConnection.release()
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}