
import { IoIosSettings } from "react-icons/io"
import { Link } from "react-router-dom"

import Spinner from "../spinners/Spinner"
import { showModal } from "../../features/modal/modalSlice"
import { useDispatch } from "react-redux"

import Container from "../../assets/containers/ProfileContent"

const ProfileContent = ({ user, postsL, currentUserId, isLoading }) => {
    const dispatch = useDispatch()
    return (
        <Container>
            {isLoading ? <Spinner /> :
                <>
                    <div className="img-container">
                        <img src={user.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt="" />
                    </div>
                    <div className="content-container">
                        <div className="content-top">
                            <h2 className="username">{user.username}</h2>
                            {
                                user._id === currentUserId &&
                                <>
                                    <button className="btn-edit"><Link to="/settings/edit_Profile" >Edit Profile</Link></button>
                                    <IoIosSettings className="settings-icon" onClick={() => dispatch(showModal("settingTab"))} />
                                </>
                            }
                        </div>
                        <div className="content-stats">
                            <div className="content-stats-item">
                                <span className="stats-count">{postsL} </span>post
                            </div>
                            <button className="content-stats-item" onClick={() => dispatch(showModal("follower"))}>
                                <span className="stats-count">{user.followers.length} </span>followers
                            </button>
                            <button className="content-stats-item" onClick={() => dispatch(showModal("following"))}>
                                <span className="stats-count">{user.followings.length} </span>followings
                            </button>
                        </div>
                        <div className="user-info">
                            <span className="name">{user?.name}</span>
                            <p className="bio">{user.biography}</p>
                            <a href={user?.website} className="website" rel="noreferrer" target="_blank">{user?.website}</a>
                        </div>
                    </div>
                </>}
        </Container>
    )
}

export default ProfileContent