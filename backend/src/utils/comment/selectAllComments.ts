import {Comment} from "../interfaces/comment";
import {connect} from "../database.util";
import {User} from "../interfaces/User";
import {RowDataPacket,} from "mysql2"

export async function selectAllComments() : Promise<Comment[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(commentId) AS commentId, BIN_TO_UUID (commentUserId) AS commentUserId, commentContent, commentDate, user.userAtHandle'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Comment>
    } catch (error) {
        throw error
    }
}