
import { Link } from "react-router-dom"

import Container from "../../assets/containers/EmptyTimeline"

const EmptyTimeline = () => {
    return (
        <Container>
            <div className="wrapper">
                <div>There is no post</div>
                <div className="img-wrapper">
                    <img src="https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/search.jpg?alt=media&token=98b0f0e2-4f03-463a-aeb4-3455493372d1" alt="empty-timeline" />
                </div>
                <div>Follow other users to expand your timeline</div>
                <Link to="/explore">
                    Explore
                </Link>
            </div>
        </Container>
    )
}

export default EmptyTimeline