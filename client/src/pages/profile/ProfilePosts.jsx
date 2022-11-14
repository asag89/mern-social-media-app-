

import { useSelector } from "react-redux"

import PostItem from "../../components/postItem/PostItem"
import { HiOutlineCamera } from "react-icons/hi"

import Container from "../../assets/containers/ProfilePosts"

// profile index
// profile posts
const ProfilePosts = () => {

    const { posts, isLoading } = useSelector((state) => state.post)

    if (!posts || isLoading) {
        return null
    }
    return (
        <Container>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <PostItem post={post} key={post._id} />
                )))
                : <div className="no-post-container">
                    <div className="icon-wrapper">
                        <HiOutlineCamera className="icon" />
                    </div>
                    <p>No Posts Yet</p>
                </div>
            }
        </Container>
    )
}

export default ProfilePosts