
import { NavLink, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { logout } from "../../features/currentUser/currentUserSlice"
import { showModal } from "../../features/modal/modalSlice"
import { useScrollLock } from "../../hooks/useScrollLock"
import MobileCloseModalTab from "../general/MobileCloseModalTab"
import useWindowDimensions from "../../hooks/useWindowSize"
import { MdOutlineArrowForwardIos } from "react-icons/md"

import Container from "../../assets/containers/SettingsTabModal"

import { settingsLinks } from "../../utils/NavlLinks"

const SettingsTabModal = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { lockScroll, unlockScroll } = useScrollLock();
    const { modalLocation } = useSelector((state) => state.modal)
    const { width } = useWindowDimensions()

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
                {width <= 562 &&
                    <MobileCloseModalTab text={"settings"} />
                }
                {settingsLinks.map((item) => (
                    <NavLink className="item" to={item.path} key={item.id} onClick={() => dispatch(showModal(null))}>
                        <div>{item.text}</div>
                        <MdOutlineArrowForwardIos className="icon-arrow" />
                    </NavLink>
                ))}
                <button className="item" onClick={() => { dispatch(logout()); dispatch(showModal(null)) }}>
                    <div className="red">Log Out</div>
                    <MdOutlineArrowForwardIos className="icon-arrow" />

                </button>
                {width > 562 &&
                    <button className="item" onClick={() => dispatch(showModal(null))}>
                        <div>Cancel</div>
                        <MdOutlineArrowForwardIos className="icon-arrow" />
                    </button>
                }
            </div>
        </Container>
    )
}

export default SettingsTabModal