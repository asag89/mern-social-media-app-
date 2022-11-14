
import { useDispatch, useSelector } from "react-redux"
import { showModal } from "../../features/modal/modalSlice"
import { Link, useLocation } from "react-router-dom"
import { followUnfollow } from "../../features/currentUser/currentUserSlice"
import useWindowDimensions from "../../hooks/useWindowSize"
import MobileCloseModalTab from "../general/MobileCloseModalTab"
import { useScrollLock } from "../../hooks/useScrollLock"
import { useEffect } from "react"
import { useState } from "react"
import SmallSpinner from "../spinners/SmallSpinner"

import Container from "../../assets/containers/FllwModal"

const FllwModal = () => {

    const dispatch = useDispatch()
    const [processedId, setProcessedId] = useState("")
    const { width } = useWindowDimensions()
    const { user, currentUserFollowers, currentUserfollowings, isLoading } = useSelector((state) => state.currentUser)
    const { followers, followings } = useSelector((state) => state.user)
    const { modalType, modalLocation } = useSelector((state) => state.modal)
    const { lockScroll, unlockScroll } = useScrollLock();
    const location = useLocation()

    useEffect(() => {
        lockScroll()

        return () => {
            unlockScroll()
        }
    }, [lockScroll, unlockScroll])

    useEffect(() => {
        if (location.pathname !== modalLocation) {
            dispatch(showModal(null))
        }
    }, [dispatch, location.pathname, modalLocation])

    return (
        <Container onClick={() => dispatch(showModal(null))}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {width <= 562 ?
                    <MobileCloseModalTab text={modalType === "following" ? "following" : "followers"} />
                    :
                    <div className="header">
                        <div className="placeholder" />
                        <h2 className="title">{modalType}s</h2>
                        <button className="close-btn" onClick={() => dispatch(showModal(null))}>x</button>
                    </div>
                }
                <div className="wrapper">
                    {
                        modalType === "follower" &&

                        <div className="list">
                            {followers.map((item) => (
                                <div className="item" key={item._id}>
                                    <Link to={`/profile/${item.username.toLowerCase()}`} onClick={() => dispatch(showModal(null))} className="img-wrapper">
                                        <img src={item.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt={item.username} />
                                    </Link>
                                    <div className="user-info">
                                        <Link to={`/profile/${item.username.toLowerCase()}`} onClick={() => dispatch(showModal(null))} className="username">{item.username}</Link>
                                        <div className="name">{item?.name}</div>
                                    </div>
                                    {
                                        item._id === user._id ? ""
                                            :
                                            currentUserFollowers.includes(item._id) ?
                                                <button className="btn-outline">
                                                    Remove
                                                </button>
                                                : <button className="btn-f" onClick={() => { setProcessedId(item._id); dispatch(followUnfollow(item._id)) }}>
                                                    {(isLoading && processedId === item._id) ? <SmallSpinner size={"13px"} color={"#fff"} /> : "Follow"}
                                                </button>
                                    }
                                </div>
                            ))}
                        </div>
                    }
                    {
                        modalType === "following" &&
                        <div className="list">
                            {followings.map((item) => (
                                <div className="item" key={item._id}>
                                    <Link to={`/profile/${item.username.toLowerCase()}`} onClick={() => dispatch(showModal(null))} className="img-wrapper">
                                        <img src={item.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt={item.username} />
                                    </Link>
                                    <div className="user-info">
                                        <Link to={`/profile/${item.username.toLowerCase()}`} onClick={() => dispatch(showModal(null))} className="username">{item.username}</Link>
                                        <div className="name">{item?.name}</div>
                                    </div>
                                    {
                                        item._id === user._id ? ""
                                            :
                                            currentUserfollowings.includes(item._id) ?
                                                <button className="btn-outline" onClick={() => { setProcessedId(item._id); dispatch(followUnfollow(item._id)) }}>
                                                    {(isLoading && processedId === item._id) ? <SmallSpinner size={"13px"} color={"#3f3f3f"} /> : "Following"}
                                                </button>
                                                : <button className="btn-f" onClick={() => { setProcessedId(item._id); dispatch(followUnfollow(item._id)) }}>
                                                    {(isLoading && processedId === item._id) ? <SmallSpinner size={"13px"} color={"#fff"} /> : "Follow"}
                                                </button>
                                    }
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </Container>
    )
}

export default FllwModal