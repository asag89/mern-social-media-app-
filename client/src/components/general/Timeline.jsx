
import TimelinePostItem from "../postItem/TimelinePostItem"
import Spinner from "../spinners/Spinner"
import { getSavedPostIds } from "../../features/saved/savedSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import EmptyTimeline from "./EmptyTimeline"

import Container from "../../assets/containers/Timeline"
const Timeline = ({ posts, isLoading }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSavedPostIds())
    }, [dispatch])
    return (
        <Container>
            {isLoading ? <Spinner /> :
                <>
                    {posts.map((post) => (
                        <TimelinePostItem
                            key={post._id}
                            post={post}
                            more={true}
                        />
                    ))
                    }
                    {
                        (posts.length < 1 && !isLoading) && <EmptyTimeline />
                    }
                </>
            }
        </Container>
    )
}

export default Timeline