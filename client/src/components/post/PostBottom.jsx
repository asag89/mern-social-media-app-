
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa"
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri"
import { FiShare } from "react-icons/fi"
import moment from "moment"
import { useDispatch, useSelector } from "react-redux"
import { getPost, getPostLikes } from "../../features/post/postSlice"
import { showModal } from "../../features/modal/modalSlice"
import CreateComment from "./CreateComment"
import { savePost } from "../../features/saved/savedSlice"
import { likeUnlike } from "../../features/currentUser/currentUserSlice"
import { useState } from "react"

// css
import Container from "../../assets/containers/PostBottom"

const PostBottom = ({ post, more }) => {

    const dispatch = useDispatch()
    const { savedPostIds } = useSelector((state) => state.saved)
    const { modalType } = useSelector((state) => state.modal)
    const { userLikes } = useSelector((state) => state.currentUser)
    const [postLikes, setPostLikes] = useState(post.likes.length)
    const [postComments, setPostComments] = useState(post.comments.length)

    const handleClick = () => {
        dispatch(getPost(post))
        dispatch(showModal("read"))
    }

    return (
        <Container isModal={modalType === "read" && true}>
            <div className="post-content-icons">
                <div className="post-content-icon-wrapper">
                    {userLikes.includes(post._id) ?
                        <FaHeart className="post-content-icon" stroke="currentColor" fill="red" enableBackground={"red"} onClick={() => { dispatch(likeUnlike(post._id)); setPostLikes((prev) => prev - 1) }} />
                        :
                        <FaRegHeart className="post-content-icon" stroke="currentColor" onClick={() => { dispatch(likeUnlike(post._id)); setPostLikes((prev) => prev + 1) }} />
                    }
                </div>
                <div className="post-content-icon-wrapper">
                    <FaRegComment className="post-content-icon" onClick={handleClick} />
                </div>
                <div className="post-content-icon-wrapper">
                    <FiShare className="post-content-icon" />
                </div>
                <div className="post-content-icon-wrapper">
                    {savedPostIds.includes(post._id) ?
                        <RiBookmarkFill fill="#000" stroke="currentColor" className="post-content-icon saved" onClick={() => dispatch(savePost(post._id))} />
                        :
                        <RiBookmarkLine fill="#000" stroke="currentColor" className="post-content-icon saved" onClick={() => dispatch(savePost(post._id))} />
                    }
                </div>
            </div>
            <div className="post-likes" onClick={() => { dispatch(getPostLikes(post._id)); dispatch(showModal("postLikes")) }}>
                <span>{postLikes}</span> {postLikes > 1 ? "likes" : "like"}
            </div>
            {
                more &&
                <div className="post-comments">
                    <div className="post-comments-item">
                        <span className="post-username">{post.createdBy.username}</span><p className="post-comments-text">{post.text}</p>
                    </div>
                    <div className="post-comments-item">
                        <span className="post-comments-count" onClick={handleClick}>{postComments} {postComments > 1 ? "comments" : "comment"}</span>
                    </div>
                </div>
            }
            <div className="post-ago">
                {moment(post.createdAt).fromNow()}
            </div>
            <CreateComment post={post} setPostComments={setPostComments} />
        </Container>
    )
}

export default PostBottom