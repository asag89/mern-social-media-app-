
import { Link } from "react-router-dom"

import { AiOutlineSetting } from "react-icons/ai"
import { MdOutlinePersonAdd } from "react-icons/md"
import { useDispatch } from "react-redux"
import { showModal } from "../../features/modal/modalSlice"

import Container from "../../assets/containers/MobileProfileNavbar"

const MobileProfileNavbar = ({ username }) => {

    const dispatch = useDispatch()
    return (
        <Container>
            <div className="wrapper">
                <AiOutlineSetting className="icon" onClick={() => dispatch(showModal("settingTab"))} />
                <h1>{username}</h1>
                <Link to="/suggested">
                    <MdOutlinePersonAdd className="icon" />
                </Link>
            </div>
        </Container>
    )
}

export default MobileProfileNavbar