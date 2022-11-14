
import moment from 'moment'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Container from '../../assets/containers/CommentItem'
const CommentItem = ({ comment }) => {
    return (
        <Container>
            <div>
                <div className="img-container">
                    <img src={comment?.createdBy.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt="" />
                </div>
                <div className="comment-main">
                    <div className="user-info">
                        <span> <Link to={`/profile/${comment.createdBy.username}`} className="username">{comment.createdBy.username}</Link></span>
                        <p className="comment-text">{comment.text}</p>
                    </div>
                    <div className="comment-info">
                        <div className="time-ago">
                            {moment(comment.createdAt).fromNow()}
                        </div>
                        <div className="likes">
                            {comment.likes.length} likes
                        </div>
                        <button className="btn-reply">Reply</button>
                    </div>
                </div>
            </div>
            <button className="comment-heart">
                <FaRegHeart />
            </button>
        </Container>
    )
}

export default CommentItem