import {Comment} from "../interfaces/Comment";
import {connect} from "../database.util";
import {RowDataPacket} from 'mysql2';

export async function selectCommentByCommentId(commentId: string) : Promise<Comment|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(commentId) AS commentId, BIN_TO_UUID (commentUserId) AS commentUserId, commentContent, CommentDate from comment WHERE commentId = UUID_TO_BIN(:commentId)"
        const result = await mySqlConnection.execute(mySqlQuery, {commentId}) as RowDataPacket[]
        const comment : Array<Comment> = result[0] as Array<Comment>
        mySqlConnection.release()
        return comment.length === 1 ? {...comment[0]} : null;
    } catch (error) {
        throw error
    }
}