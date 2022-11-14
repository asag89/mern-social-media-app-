
import { HiHome } from "react-icons/hi"
import { BsPlusSquare, BsSearch } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { showModal } from "../../features/modal/modalSlice"

import { useDispatch } from "react-redux"

import Container from "../../assets/containers/MobileNavbar"
const MobileNavbar = () => {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.currentUser)

    return (
        <Container>
            <div className="wrapper">
                <div className="item">
                    <Link to="/" className="link">
                        <HiHome />
                    </Link>
                </div>
                <div className="item">
                    <Link to="/explore" className="link">
                        <BsSearch />
                    </Link>
                </div>
                <div className="item">
                    <div className="link">
                        <BsPlusSquare onClick={() => dispatch(showModal("create"))} />
                    </div>
                </div>
                <div className="item">
                    <Link to={`/profile/${user.username}`} className="link">
                        <div className="img-wrapper">
                            <img src={user.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt={user.username} className="user-avatar" />
                        </div>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default MobileNavbar