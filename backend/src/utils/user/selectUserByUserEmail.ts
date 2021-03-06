import {connect} from "../database.util";
import {User} from "../interfaces/User";
import {RowDataPacket} from "mysql2";

export async function selectUserByUserEmail(userEmail: string): Promise<User|null> {
    console.log(userEmail)
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = "SELECT BIN_TO_UUID(userId) as userId, userActivationToken, userEmail, userHash, userIsAdmin, userName FROM user WHERE userEmail = :userEmail"
        const result = await mysqlConnection.execute(sqlQuery, {userEmail}) as RowDataPacket[]
        const rows: User[] = result[0] as User[]
        mysqlConnection.release()
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}