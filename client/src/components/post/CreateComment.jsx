
import { useDispatch } from "react-redux"
import { createComment } from "../../features/comment/commentSlice"
import { useState } from "react"

import Container from "../../assets/containers/CreateComment"

const CreateComment = ({ post, setPostComments }) => {

    const [commentText, setCommentText] = useState()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const comment = {
            text: commentText,
            postId: post._id
        }
        dispatch(createComment(comment))
        setPostComments((prev) => prev + 1)
        setCommentText("")
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <button className="btn-svg">
                    <div className="svg-wrapper">
                        <svg aria-label="Emoji" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                    </div>
                </button>
                <textarea placeholder="Add a comment..." maxLength={120} autoComplete="off" autoCorrect="off" value={commentText} onChange={(e) => setCommentText(e.target.value)}></textarea>
                <button className="btn-submit" type="submit" disabled={!commentText}>Share</button>
            </form>
        </Container>
    )
}

export default CreateComment