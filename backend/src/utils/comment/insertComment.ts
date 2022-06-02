import {Comment} from "../interfaces/Comment";
import {connect} from "../database.util";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertComment(comment: Comment) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO comment(commentId, commentImageId, commentUserId, commentContent, commentDate) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:commentImageId), UUID_TO_BIN(:commentUserId), commentContent, NOW())";

        const [result]= await mySqlConnection.execute(mySqlQuery, comment) as [ResultSetHeader, RowDataPacket]
        return "Comment created successfully"
    } catch (error) {
        throw error
    }
}