
import { Link } from "react-router-dom"
import Footer from "./Footer"
import { useDispatch, useSelector } from "react-redux"
import { followUnfollow } from "../../features/currentUser/currentUserSlice"
import SmallSpinner from "../spinners/SmallSpinner"
import { useState } from "react"

import Container from "../../assets/containers/RightSide"

const RightSide = ({ currentUser, users }) => {
    const [processedId, setProcessedId] = useState("")
    const { currentUserfollowings, isLoading } = useSelector((state) => state.currentUser)

    const dispatch = useDispatch()
    return (
        <Container>
            <div className="user-container">
                <div className="user">
                    <Link to={`/profile/${currentUser.username.toLowerCase()}`} className="user-img-container">
                        <img src={currentUser.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt={currentUser.username} />
                    </Link>
                    <div className="user-content">
                        <Link to={`/profile/${currentUser.username.toLowerCase()}`}>{currentUser.username}</Link>
                        <p>{currentUser.name}</p>
                    </div>
                </div>
                <div className="switch">
                    <span>Switch</span>
                </div>
            </div>
            <div className="suggestion-container">
                <div className="suggestion-top">
                    <div>Suggestions For You</div>
                    <Link to={"/suggested"}>See All</Link>
                </div>
                <div className="suggestions">
                    {users.map((item) => (
                        <div className="suggestion-item" key={item._id}>
                            <Link to={`/profile/${item.username.toLowerCase()}`} className="suggestion-item-img-container">
                                <img src={item.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt="user" />
                            </Link>
                            <Link to={`/profile/${item.username.toLowerCase()}`} className="suggestion-item-username">{item.username}</Link>
                            {
                                currentUserfollowings?.includes(item._id) ?
                                    <button className="follow" onClick={() => { setProcessedId(item._id); dispatch(followUnfollow(item._id)) }}>
                                        {(isLoading && processedId === item._id) ? <SmallSpinner size={"13px"} color={"#3f3f3f"} rightSide={true} /> : "Following"}
                                    </button> :

                                    <button className="follow" onClick={() => { setProcessedId(item._id); dispatch(followUnfollow(item._id)) }}>
                                        {(isLoading && processedId === item._id) ? <SmallSpinner size={"13px"} color={"#3f3f3f"} rightSide={true} /> : "Follow"}
                                    </button>
                            }
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </Container>
    )
}

export default RightSide