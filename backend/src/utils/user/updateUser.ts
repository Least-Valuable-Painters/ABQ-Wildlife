import {User} from "../interfaces/User";
import {connect} from "../database.utils";

export async function updateUser(user: User): Promise<string> {
    try {
        const mysqlConnection = await connect();
        const query : string = 'UPDATE user SET userActivationToken = :userActivationToken, userName = :userName, userEmail = :userEmail, userHash = :userHash, userIsAdmin = :userIsAdmin, userId = :userId WHERE userId = UUID_TO_BIN(:userId)';
        await mysqlConnection.execute(query, user)
        return 'User successfully updated'
    } catch (error) {
        throw error
    }
}