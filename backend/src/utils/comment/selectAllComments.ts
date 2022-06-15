import {Comment} from "../interfaces/Comment";
import {connect} from "../database.util";
import {RowDataPacket,} from "mysql2"

export async function selectAllComments() : Promise<Comment[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(commentId) AS commentId, BIN_TO_UUID (commentImageId) AS commentImageId, BIN_TO_UUID (commentUserId) AS commentUserId, commentContent, commentDate FROM comment'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        mySqlConnection.release()
        return result[0] as Array<Comment>
    } catch (error) {
        throw error
    }
}