
import { NavLink } from 'react-router-dom'
import { MdOutlinePersonPin, MdOutlineCalendarViewMonth } from "react-icons//md"

import { BsBookmarks } from "react-icons/bs"

import Container from '../../assets/containers/ProfileTab'
const ProfileTab = ({ username, userId, currentUserId }) => {

    return (
        <Container>
            <NavLink className={({ isActive }) => isActive ? "menu-item active" : "menu-item"} end to={`/profile/${username}`}>
                <MdOutlineCalendarViewMonth />
                <span className="">Posts</span>
            </NavLink>
            {userId === currentUserId &&
                <NavLink className={({ isActive }) => isActive ? "menu-item active" : "menu-item"} end to={`/profile/${username}/saved`}>
                    <BsBookmarks />
                    <span className="icon">Saved</span>
                </NavLink>
            }
            <NavLink className={({ isActive }) => isActive ? "menu-item active" : "menu-item"} end to={`/profile/${username}/tagged`}>
                <MdOutlinePersonPin />
                <span>Tagged</span>
            </NavLink>
        </Container>
    )
}

export default ProfileTab