
import { Outlet, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

// custom hooks
import useWindowDimensions from '../hooks/useWindowSize'

import LeftSideBar from "../components/navbar/LeftSideBar"

import { navbarDropdown } from "../features/currentUser/currentUserSlice"
import { searchDropdown } from "../features/search/searchSlice"

import ModalController from "../components/general/ModalController"
import NavbarController from "../components/general/NavbarController"

// css
import Container from "../assets/containers/MainLayout"

const MainLayout = () => {
    const dispatch = useDispatch()
    const location = useLocation().pathname
    const { user, showNavbarDropdown } = useSelector((state) => state.currentUser)
    const { showSearchDropdown } = useSelector((state) => state.search)

    const { width } = useWindowDimensions();

    const handleClick = () => {
        if (showNavbarDropdown) {
            dispatch(navbarDropdown())
        }
        if (showSearchDropdown) {
            dispatch(searchDropdown())
        }
    }
    return (
        <Container onClick={handleClick} page={width <= 562 && location !== "/" ? "mobile" : "normal"} >
            <div className="wrapper">

                {/* modal controller */}
                <ModalController />

                {/* navbar controller */}
                <NavbarController />

                <div className="main" >
                    <LeftSideBar user={user} />
                    <Outlet />
                </div>
            </div>
        </Container>
    )
}

export default MainLayout