
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { followUnfollow, getSuggestions } from "../../features/currentUser/currentUserSlice"
import SmallSpinner from "../../components/spinners/SmallSpinner"
import { Link } from "react-router-dom"
import MobileBackNavigate from "../../components/general/MobileBackNavigate"
import useWindowDimensions from "../../hooks/useWindowSize"

import Container from "../../assets/containers/Suggested"

const Suggested = () => {

    const dispatch = useDispatch()
    const [processedId, setProcessedId] = useState("")
    const { recommendedUsers, currentUserfollowings, isLoading } = useSelector((state) => state.currentUser)
    const { width } = useWindowDimensions()
    useEffect(() => {
        dispatch(getSuggestions())
    }, [dispatch])

    return (
        <Container>
            <div className="wrapper">
                {width <= 562 &&
                    <MobileBackNavigate text={"discover people"} />
                }
                <h1 className="title">Suggested</h1>
                <div className="items">
                    {recommendedUsers.map((item) => (
                        <div className="item" key={item._id}>
                            <Link className="img-wrapper" to={`/profile/${item.username.toLowerCase()}`}>
                                <img src={item.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt="" />
                            </Link>
                            <div className="content">
                                <Link to={`/profile/${item.username.toLowerCase()}`} className="username">{item.username}</Link>
                                <div className="name">{item.name}</div>
                            </div>

                            <div className="follow-container">
                                {
                                    currentUserfollowings?.includes(item._id) ?
                                        <button className="follow-btn unfollow" onClick={() => { setProcessedId(item._id); dispatch(followUnfollow(item._id)) }}>
                                            {(isLoading && processedId === item._id) ? <SmallSpinner size={"13px"} color={"#3f3f3f"} /> : "Following"}
                                        </button> :

                                        <button className="follow-btn follow" onClick={() => { setProcessedId(item._id); dispatch(followUnfollow(item._id)) }}>
                                            {(isLoading && processedId === item._id) ? <SmallSpinner size={"13px"} color={"#fff"} /> : "Follow"}
                                        </button>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Suggested