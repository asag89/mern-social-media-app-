
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { BsPersonCircle } from "react-icons/bs"
import { RiSettings2Line, RiBookmarkLine } from "react-icons/ri"
import { MdLogout } from "react-icons/md"
import { TbSwitch2 } from "react-icons/tb"

import { navbarDropdown, logout } from "../../features/currentUser/currentUserSlice"

import Container from "../../assets/containers/NavbarDropdown"

const NavbarDropdown = ({ username }) => {
    const dispatch = useDispatch()

    return (
        <Container>
            <div className="items">
                <Link to={`/profile/${username}`} onClick={() => dispatch(navbarDropdown())}>
                    <div className="item">
                        <BsPersonCircle className="icon" />
                        <div className="text">Profile</div>
                    </div>
                </Link>

                <Link to={`/profile/${username}/saved`} onClick={() => dispatch(navbarDropdown())}>
                    <div className="item">
                        <RiBookmarkLine className="icon" />
                        <div className="text">Saved</div>
                    </div>
                </Link>

                <Link to="/settings/edit_Profile" onClick={() => dispatch(navbarDropdown())}>
                    <div className="item">
                        <RiSettings2Line className="icon" />
                        <div className="text">Settings</div>
                    </div>
                </Link>

                <Link to={"/"} onClick={() => dispatch(navbarDropdown())}>
                    <div className="item">
                        <TbSwitch2 className="icon" />
                        <div className="text">Switch Accounts</div>
                    </div>
                </Link>

                <Link to={"/"} onClick={() => { dispatch(navbarDropdown()); dispatch(logout()) }}>
                    <div className="item">
                        <MdLogout className="icon" />
                        <div className="text">Log Out</div>
                    </div>
                </Link>
            </div>
        </Container>
    )
}

export default NavbarDropdown