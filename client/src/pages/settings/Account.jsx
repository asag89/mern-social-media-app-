
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { useDispatch, useSelector } from "react-redux"

import MobileBackNavigate from "../../components/general/MobileBackNavigate"
import { clearError, confirmPassword } from "../../features/currentUser/currentUserSlice"
import { showModal } from "../../features/modal/modalSlice"
import useWindowDimensions from "../../hooks/useWindowSize"

import Container from "../../assets/containers/Account"

const Account = () => {

    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const { isPassword, isError, message } = useSelector((state) => state.currentUser)
    const { width } = useWindowDimensions()
    useEffect(() => {
        if (isPassword) {
            dispatch(showModal("deleteAccountConfirm"))
            dispatch(clearError())
        }
    }, [isPassword, dispatch])

    const handleSubmit = () => {
        if (password) {
            dispatch(confirmPassword({ password }))
        }
    }
    return (
        <Container>
            <Helmet>
                <title>Account | Ankrom</title>
            </Helmet>
            <div className="wrapper">
                {width <= 562 &&
                    <MobileBackNavigate text={"edit profile"} />
                }
                <div className="item">
                    <aside>
                        {/* empty */}
                    </aside>
                    <div className="content">
                        <div className="desc">
                            <h3>Account</h3>

                            You can adjust your account settings here
                        </div>
                    </div>
                </div>
                <div className="item">
                    <aside>
                        {/* empty */}
                    </aside>
                    <div className="content">
                        <div className="desc">
                            <h3 className="color-danger">Delete Account</h3>
                            Please enter your password
                        </div>
                    </div>
                </div>
                <div className="item">
                    <aside>
                        <label htmlFor="password" className="title">Password</label>
                    </aside>
                    <div className="content">
                        <input name="password" id="password" className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {
                            isError &&
                            <div className="err-message">{message}</div>
                        }
                    </div>
                </div>

                <div className="item">
                    <aside>
                    </aside>
                    <div className="content">
                        <button onClick={handleSubmit} className="btn-submit" disabled={password.length < 6}>Submit</button>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default Account