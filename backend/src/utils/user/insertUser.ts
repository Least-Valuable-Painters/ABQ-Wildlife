import {connect} from "../database.util";
import {User} from "../interfaces/User";

export async function insertUser(user: User) : Promise<string> {
    console.log(user)
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO user(userId, userActivationToken, userName, userEmail, userHash, userIsAdmin) VALUES (UUID_TO_BIN(UUID()), :userActivationToken, :userName, :userEmail, :userHash, :userIsAdmin)';
        await mysqlConnection.execute(query, user);
        await mysqlConnection.release()
        return 'SignUp account successfully created.'
    }catch (error) {
        throw error
    }
}
