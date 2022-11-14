
import CommentItem from "./CommentItem"

import Container from "../../assets/containers/PostComments"

const PostComments = ({ comments }) => {

    return (
        <Container>
            {comments.map((comment) => (
                <CommentItem key={comment._id} comment={comment} />
            ))}
        </Container>
    )
}

export default PostComments