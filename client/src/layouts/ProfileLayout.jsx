
import { useSelector, useDispatch } from "react-redux"

import { Outlet } from 'react-router-dom'
import ProfileContent from '../components/general/ProfileContent'

import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getUser } from "../features/user/userSlice"
import { getPosts } from "../features/post/postSlice"
import { Helmet } from 'react-helmet-async'
import Footer from "../components/general/Footer"
import MobileProfileNavbar from "../components/navbar/MobileProfileNavbar"
import useWindowDimensions from "../hooks/useWindowSize"
import ProfileTab from "../components/general/ProfileTab"

// css
import Container from "../assets/containers/ProfileLayout"
import ScrollToTop from "../components/general/ScrollToTop"

const ProfileLayout = () => {

    const dispatch = useDispatch()
    const { username } = useParams()

    const { width } = useWindowDimensions()
    const { user } = useSelector((state) => state.currentUser)
    const { userProfile, isLoading } = useSelector((state) => state.user)
    const { posts } = useSelector((state) => state.post)

    useEffect(() => {
        dispatch(getUser(username))
        dispatch(getPosts(username))
    }, [dispatch, user, username])

    if (!userProfile || !posts) {
        return null
    }

    return (
        <Container>
            <Helmet>
                <title>{userProfile.name} (@{userProfile.username}) | Ankrom</title>
            </Helmet>
            {
                width <= 562 &&
                <MobileProfileNavbar username={userProfile.username} />
            }
            <ProfileContent user={userProfile} postsL={posts.length} currentUserId={user._id} isLoading={isLoading} />

            <ProfileTab username={userProfile.username} userId={userProfile._id} currentUserId={user._id} />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </Container>
    )
}

export default ProfileLayout