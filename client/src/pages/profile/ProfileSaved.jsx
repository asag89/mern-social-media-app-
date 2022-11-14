import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PostItem from "../../components/postItem/PostItem"
import { getSavedPosts } from "../../features/saved/savedSlice"

// css
import Container from "../../assets/containers/ProfileSaved"

const ProfileSaved = () => {

    const { savedPostIds, savedPosts } = useSelector((state) => state.saved)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSavedPosts(savedPostIds))
    }, [dispatch, savedPostIds])

    if (!savedPosts) {
        return null
    }
    return (
        <Container>
            {savedPosts.map((post) => (
                <PostItem post={post} key={post._id} />
            ))}
        </Container>
    )
}

export default ProfileSaved