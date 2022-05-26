import {Comment} from "../interfaces/Comment";
import {connect} from "../database.util";
import {RowDataPacket} from 'mysql2';

export async function selectCommentByCommentUserId(commentUserId: string) : Promise<Comment[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(commentId) AS commentId, BIN_TO_UUID (commentUserId) AS commentUserId, commentContent, commentDate, user.userAtHandle, user.userAvatarUrl, (SELECT COUNT(*) FROM `favorite` WHERE comment.commentId = favorite.favoriteLocationId) AS favoriteCount FROM comment INNER JOIN user ON user.userId = comment.commentUserId WHERE commentUserId = UUID_TO_BIN(:commentUserId) ORDER BY commentDate DESC'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {commentUserId})
        return result[0] as Comment[]
    } catch (error) {
        throw error
    }
}