
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"

import { getError } from "../../features/currentUser/currentUserSlice"
import { Helmet } from 'react-helmet-async'
import useWindowDimensions from "../../hooks/useWindowSize"
import MobileBackNavigate from "../../components/general/MobileBackNavigate"

import Container from "../../assets/containers/ChangePassword"

const ChangePassword = () => {

    const dispatch = useDispatch()
    const { width } = useWindowDimensions()
    const { user, isError, message, isLoading } = useSelector((state) => state.currentUser)

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newPassword !== confirmPassword) {
            dispatch(getError("Please make sure both passwords match."))
        }
        else {
            dispatch(getError("Please try again later..."))
        }
    }

    return (
        <Container>
            <Helmet>
                <title>Change password | Ankrom</title>
            </Helmet>
            {
                width <= 562 &&
                <MobileBackNavigate text={"change password"} />
            }
            <form onSubmit={handleSubmit} className="settings">
                <div className="settings-item">
                    <aside className="aside">
                        <div className="img-container">
                            <img src={user.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt={user.username} />
                        </div>
                    </aside>
                    <div className="content">
                        <h1 className="username">{user.username}</h1>
                    </div>
                </div>

                <div className="settings-item">
                    <aside className="aside">
                        <label htmlFor="oldPassword" className="title">Old Password</label>
                    </aside>
                    <div className="content">
                        <input name="username" id="oldPassword" type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                    </div>
                </div>

                <div className="settings-item">
                    <aside className="aside">
                        <label htmlFor="newPassword" className="title">New Password</label>
                    </aside>
                    <div className="content">
                        <input name="username" id="newPassword" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                </div>

                <div className="settings-item">
                    <aside className="aside">
                        <label htmlFor="confirmPassword" className="title">Confirm New Password</label>
                    </aside>
                    <div className="content">
                        <input name="username" id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                </div>

                {(!isLoading && isError) &&
                    <div div className="settings-item">
                        <aside className="aside">
                        </aside>
                        <div className="content">
                            <p className="err">{message}</p>
                        </div>
                    </div>
                }

                <div className="settings-item">
                    <aside className="aside">
                    </aside>
                    <div className="content">
                        <button type="submit" className="btn-submit" disabled={!oldPassword || !newPassword || !confirmPassword}>Change Password</button>
                    </div>
                </div>

                <div className="settings-item">
                    <aside className="aside">
                    </aside>
                    <div className="content">
                        <a href="/settings/change_password" className="forgot">Forgot Password?</a>
                    </div>
                </div>
            </form>
        </Container >
    )
}

export default ChangePassword