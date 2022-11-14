
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getAllPosts } from "../../features/post/postSlice"
import Spinner from "../../components/spinners/Spinner"
import SearchBar from "../../components/general/SearchBar"
import useWindowDimensions from "../../hooks/useWindowSize"
import { Helmet } from 'react-helmet-async'
import PostItem from "../../components/postItem/PostItem"

// css
import Container from "../../assets/containers/Explore"

const Explore = () => {
    const dispatch = useDispatch()
    const { width } = useWindowDimensions();

    const { posts, isLoading } = useSelector((state) => state.post)
    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    return (
        <Container>
            <Helmet>
                <title>Ankrom</title>
            </Helmet>
            {width <= 562 &&
                <div className="searchBar-container">
                    < SearchBar />
                </div>
            }
            {isLoading ? <Spinner /> :

                <div className="wrapper">
                    {posts.map((post) => (
                        <PostItem post={post} key={post._id} parent={"explore"} />))
                    }
                </div>
            }
        </Container>
    )
}

export default Explore
