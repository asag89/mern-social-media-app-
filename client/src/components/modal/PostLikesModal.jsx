
import { useSelector, useDispatch } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { showModal } from "../../features/modal/modalSlice"
import { followUnfollow } from "../../features/currentUser/currentUserSlice"
import { useScrollLock } from "../../hooks/useScrollLock"
import { useEffect } from "react"
import useWindowDimensions from "../../hooks/useWindowSize"
import MobileCloseModalTab from "../general/MobileCloseModalTab"

import Container from "../../assets/containers/PostlikesModal"
const PostLikesModal = () => {

    const dispatch = useDispatch()
    const { user, currentUserfollowings } = useSelector((state) => state.currentUser)
    const { usersWhoLikes } = useSelector((state) => state.post)
    const { modalLocation } = useSelector((state) => state.modal)
    const location = useLocation()
    const { lockScroll, unlockScroll } = useScrollLock();
    const { width } = useWindowDimensions();

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
            <div className="modal" onClick={(e) => e.stopPropagation()} >
                {width <= 562 ?
                    <MobileCloseModalTab text={"likes"} />
                    :
                    <div className="header">
                        <div className="placeholder" />
                        <h2 className="title">Likes</h2>
                        <button className="close-btn" onClick={() => dispatch(showModal(null))}>x</button>
                    </div>
                }
                <div className="wrapper">
                    <div className="list">
                        {usersWhoLikes.map((item) => (
                            <div className="item" key={item._id}>
                                <Link to={`/profile/${item.username.toLowerCase()}`} onClick={() => dispatch(showModal(null))} className="img-wrapper">
                                    <img src={item.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt={item.username} />
                                </Link>
                                <div className="user-info">
                                    <div className="username">{item.username}</div>
                                    <div className="name">{item?.name}</div>
                                </div>
                                {
                                    item._id === user._id ? ""
                                        :
                                        currentUserfollowings.includes(item._id) ?
                                            <button className="btn-outline" onClick={() => dispatch(followUnfollow(item._id))}>
                                                Following
                                            </button>
                                            : <button className="btn-f" onClick={() => dispatch(followUnfollow(item._id))}>
                                                Follow
                                            </button>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default PostLikesModal