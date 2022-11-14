
import { useEffect } from 'react'
import Timeline from '../../components/general/Timeline'
import { getTimelinePosts } from '../../features/post/postSlice'
import { useDispatch, useSelector } from "react-redux"
import RightSide from '../../components/general/RightSide'
import { getSuggestions } from '../../features/currentUser/currentUserSlice'
import { Helmet } from 'react-helmet-async'

const Home = () => {

    const dispatch = useDispatch()
    const { posts, isLoading } = useSelector((state) => state.post)
    const { user, recommendedUsers } = useSelector((state) => state.currentUser)

    useEffect(() => {
        dispatch(getTimelinePosts())
        dispatch(getSuggestions())
    }, [dispatch])

    return (
        <>
            <Helmet>
                <title>Ankrom</title>
            </Helmet>
            <Timeline posts={posts} isLoading={isLoading} />
            <RightSide currentUser={user} users={recommendedUsers} />
        </>
    )
}

export default Home