
import { FaComment, FaHeart } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { getPost } from "../../features/post/postSlice"
import { showModal } from "../../features/modal/modalSlice"

import Container from "../../assets/containers/PostItem"

// this component are used in ProfilePosts and Explore page
const PostItem = ({ post, parent }) => {

    const dispatch = useDispatch()

    if (!post) {
        return null
    }

    return (
        <Container parent={parent} key={post._id} onClick={() => { dispatch(showModal("read")); dispatch(getPost(post)); }}>
            <div className="post-img-container">
                <img src={post?.image} className="post-img" alt="post" />
            </div>
            <div className="post-tools">
                <span className="res">
                    <div className="res-item">
                        <FaHeart className="icon" />
                        <span>{post.likes.length}</span>
                    </div>
                    <div className="res-item">
                        <FaComment className="icon" />
                        <span>{post.comments.length}</span>
                    </div>
                </span>
            </div>
        </Container>
    )
}

export default PostItem