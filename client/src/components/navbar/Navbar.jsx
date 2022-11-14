
import { Link } from "react-router-dom"
import SearchBar from "../general/SearchBar"
import { BsPlusSquare } from "react-icons/bs"
import { showModal } from "../../features/modal/modalSlice"
import { useDispatch, useSelector } from "react-redux"
import { navbarDropdown } from "../../features/currentUser/currentUserSlice"
import NavbarDropdown from "../dropdown/NavbarDropdown"

import Container from "../../assets/containers/Navbar"

const Navbar = () => {

    const dispatch = useDispatch()
    const { user, showNavbarDropdown } = useSelector((state) => state.currentUser)

    return (
        <Container>
            <Link to="/" className="logo">Ankrom</Link>
            <SearchBar />
            <div className="right-container">
                <BsPlusSquare className="add-icon" onClick={() => dispatch(showModal("create"))} />
                <div className="img-wrapper" onClick={() => dispatch(navbarDropdown())}>
                    <img src={user.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/avatar.jpg?alt=media&token=9c018e7b-560f-47bd-8e2a-4392b0de5604"} alt={user.username} className="user-avatar" />
                    {showNavbarDropdown &&
                        <NavbarDropdown username={user.username} />
                    }
                </div>
            </div>
        </Container>
    )
}

export default Navbar