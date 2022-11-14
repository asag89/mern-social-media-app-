
import { NavLink } from "react-router-dom"

import { leftSideBarLinks } from "../../utils/NavlLinks"

import Container from "../../assets/containers/LeftSideBar"

const LeftSideBar = () => {
    return (
        <Container>
            <div className="wrapper">
                <div className="tab">
                    {
                        leftSideBarLinks.map(({ text, icon, path, id }) => (
                            <NavLink to={path} key={id} className={({ isActive }) => isActive ? "navLink active" : "navLink"}>
                                <div className="navLink-content">{icon}<span className="item-text">{text}</span></div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default LeftSideBar