
import { useDispatch, useSelector } from "react-redux"
import { confirmActivity } from "../../features/loginActivity/loginActivitySlice"
import { useLocation, useNavigate } from "react-router-dom"
import { showModal } from "../../features/modal/modalSlice"
import MobileCloseModalTab from "../general/MobileCloseModalTab"
import useWindowDimensions from "../../hooks/useWindowSize"
import { useScrollLock } from "../../hooks/useScrollLock"
import { useEffect } from "react"

import Container from "../../assets/containers/ActivityVerificationModal"

const ActivityVerificationModal = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const { width } = useWindowDimensions()
    const navigate = useNavigate()
    const { activityId, type } = useSelector((state) => state.loginActivity)
    const { modalLocation } = useSelector((state) => state.modal)
    const { lockScroll, unlockScroll } = useScrollLock();

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
        <Container >
            <div className="modal">
                {width <= 562 &&
                    <MobileCloseModalTab text={"login activity"} />
                }
                {type === "was" &&
                    <>
                        <div className="content">

                            <h3>Confirm This login?</h3>
                            <p>If you recognize this device and location, we'll keep your account logged in.</p>
                        </div>
                        <div className="btn-container">
                            <button className="btn-confirm" onClick={() => { dispatch(confirmActivity({ activityId, confirm: true })); dispatch(showModal(null)) }}>Confirm</button>
                            <button onClick={() => dispatch(showModal(null))}>Not now</button>
                        </div>
                    </>
                }
                {type === "wasn't" &&
                    <>
                        <div className="content">
                            <h3>Change your password to secure your account</h3>
                            <p>Since you said this wasn't you, update your password to keep your account safe. You'll be logged out everywhere else, so anyone trying to get into your account will no longer have access.</p>

                        </div>
                        <div className="btn-container">
                            <button className="btn-confirm" onClick={() => { dispatch(showModal(null)); navigate("/settings/change_password") }}>Change password</button>
                            <button onClick={() => dispatch(showModal(null))}>Not now</button>
                        </div>
                    </>
                }
            </div>
        </Container >
    )
}

export default ActivityVerificationModal