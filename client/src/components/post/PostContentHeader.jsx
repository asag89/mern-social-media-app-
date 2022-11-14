
import { IoIosMore } from "react-icons/io"
import { Link } from "react-router-dom"
import { showNestedModal } from "../../features/modal/modalSlice"
import { useDispatch } from "react-redux"

import Container from "../../assets/containers/PostContentHeader"

const PostContentHeader = ({ post }) => {
    const dispatch = useDispatch()
    return (
        <Container>
            <div className="user-info">
                <Link to={`/profile/${post.createdBy.username}`} className="img-container">
                    <img src={post.createdBy.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt={post.createdBy.username} />
                </Link>
                <span>
                    <Link to={`/profile/${post.createdBy.username}`} className="username">{post.createdBy.username}</Link>
                </span>
            </div>
            <button className="more" onClick={() => dispatch(showNestedModal("nestedPostOptions"))}>
                <IoIosMore className="icon" />
            </button>
        </Container>
    )
}

export default PostContentHeader