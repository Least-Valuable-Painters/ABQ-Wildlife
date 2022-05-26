import {Comment} from "../interfaces/Comment";
import {connect} from "../database.util";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertTweet(comment: Comment) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO comment(commentId, commentUserId, commentContent, commentDate ) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:commentUserId))";

        const [result]= await mySqlConnection.execute(mySqlQuery, comment) as [ResultSetHeader, RowDataPacket]
        return "Tweet created successfully"
    } catch (error) {
        throw error
    }
}