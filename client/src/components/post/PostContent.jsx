
import PostComments from "./PostComments"
import PostBottom from "./PostBottom"
import { useDispatch, useSelector } from "react-redux"

import { useEffect } from "react"
import { getComments } from "../../features/comment/commentSlice"
import PostContentHeader from "./PostContentHeader"

import moment from "moment"

import Container from "../../assets/containers/PostContent"

const PostContent = ({ post, width, more }) => {
    const dispatch = useDispatch()

    const { comments, isLoading } = useSelector((state) => state.comment)

    useEffect(() => {
        dispatch(getComments(post._id))
    }, [dispatch, post._id])

    return (
        <Container width={width}>
            <div className="content">
                <PostContentHeader post={post} />
                <div className="comments-container">
                    <div className="comment-top">
                        <div className="img-container">
                            <img src={post.createdBy.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt={post.createdBy.username} />
                        </div>
                        <div className="content-container">
                            <div className="user-info">
                                <span> <a href={`/profile/${post.createdBy.username}`} className="username">{post.createdBy.username}</a></span>
                                <p className="post-comment">{post.text}</p>
                            </div>
                            <div className="comment-info">
                                <div className="time-ago">
                                    {moment(post.createdAt).fromNow()}
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        !isLoading &&
                        < PostComments comments={comments} />
                    }
                </div>
                <PostBottom post={post} more={more} pd={"5px 4px 5px 5px"} />
            </div>
        </Container>
    )
}

export default PostContent