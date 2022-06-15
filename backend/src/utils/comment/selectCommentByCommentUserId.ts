import {Comment} from "../interfaces/Comment";
import {connect} from "../database.util";
import {RowDataPacket} from 'mysql2';

export async function selectCommentByCommentUserId(commentUserId: string) : Promise<Comment[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(commentId) AS commentId, BIN_TO_UUID (commentImageId) AS commentImageId, BIN_TO_UUID (commentUserId) AS commentUserId, commentContent, commentDate FROM comment WHERE commentUserId = UUID_TO_BIN(:commentUserId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {commentUserId})
        mySqlConnection.release()
        return result[0] as Comment[]
    } catch (error) {
        throw error
    }
}