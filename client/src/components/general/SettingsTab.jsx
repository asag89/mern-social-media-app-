
import { NavLink } from "react-router-dom"

import { MdOutlineArrowForwardIos } from "react-icons/md"
import Contanier from "../../assets/containers/SettingsTab"

import { settingsLinks } from "../../utils/NavlLinks"

const SettingsTab = ({ showArrow }) => {
    return (
        <Contanier>
            {settingsLinks.map((item) => (
                <NavLink to={item.path} className={({ isActive }) => isActive ? "tabItem active" : "tabItem"} end key={item.id}>
                    {item.text}
                    {showArrow &&
                        < MdOutlineArrowForwardIos />
                    }
                </NavLink>
            ))}
        </Contanier>
    )
}

export default SettingsTab