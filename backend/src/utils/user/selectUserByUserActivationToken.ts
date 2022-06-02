import {connect} from "../database.util";
import {User} from "../interfaces/User";
import {RowDataPacket} from "mysql2";


export async function selectUserByUserActivationToken(userActivationToken: string): Promise<User|null> {
    try {
        console.log(userActivationToken)
        const mysqlConnection = await connect();
        const mysqlQuery: string = "SELECT BIN_TO_UUID(userId) as userId, userName, userEmail FROM user WHERE userActivationToken =  userActivationToken"
        const result = await mysqlConnection.execute(mysqlQuery, {userActivationToken}) as RowDataPacket[]
        const rows: User[] = result[0] as User[]
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}