import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import {httpConfig} from "../../utils/httpConfig";
import {useDispatch} from "react-redux";
import {getAllComments} from "../../../../store/comment";

export const CommentCard = ({comment}) => {

    const dispatch = useDispatch()

    // const clickLike = () => {
    //     httpConfig.post("/apis/like/", {likeCommentId: comment.commentId})
    //         .then(reply => {
    //                 if(reply.status === 200) {
    //                     console.log(reply)
    //                     dispatch(getAllComments())
    //                 }
    //                 console.log(reply)
    //             }
    //         );
    // }
    return (
        <div>
            <Row>
                {/*<Col xs={1}>*/}
                    <Image src={comment.commentImageId} roundedCircle fluid/>
                {/*</Col>*/}
                <Col>
                    <strong>{comment.userName}</strong> {new Date(comment.commentDate).toDateString()}
                    <p>{comment.commentContent}</p>
                    {/*<button onClick={clickLike}>{tweet.likeCount}<span role="img" aria-label="heart emoji">❤️</span></button>*/}
                    {/*{logged in profile id === tweet.tweetProfileId ? <button onclick={deleteTweet}>Delete</button> : ""}*/}
                </Col>
            </Row>
        </div>

    )
};