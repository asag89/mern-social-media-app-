
import { IoIosMore } from "react-icons/io"
import { Link } from "react-router-dom"
import PostBottom from "../post/PostBottom"
import { showNestedModal } from "../../features/modal/modalSlice"
import { useDispatch } from "react-redux"
import { getPost } from "../../features/post/postSlice"

import Container from "../../assets/containers/TimelinePostItem"

const TimelinePostItem = ({ post, more }) => {
    const dispatch = useDispatch()

    return (
        <Container>
            <div className="post-header">
                <div className="post-header-user">
                    <div className="img-wrapper">
                        <Link to={`/profile/${post.createdBy.username}`}>
                            <img src={post.createdBy.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt={post.createdBy.username} className="user-photo" />
                        </Link>
                    </div>
                    <Link to={`/profile/${post.createdBy.username}`} className="post-header-username">{post.createdBy.username}</Link>
                </div>
                <button className="more-icon-wrapper" onClick={() => { dispatch(showNestedModal("nestedPostOptions")); dispatch(getPost(post)) }}>
                    <IoIosMore className="more-icon" />
                </button>
            </div>
            <div className="post-image-wrapper">
                <img src={post.image} alt="post" className="post-image" />
            </div>
            <PostBottom post={post} more={more} />
        </Container>
    )
}

export default TimelinePostItem