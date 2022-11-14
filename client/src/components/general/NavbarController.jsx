
import { useLocation } from "react-router-dom"

import MobileNavbar from "../navbar/MobileNavbar"
import MobileTopNavbar from "../navbar/MobileTopNavbar"
import Navbar from "../navbar/Navbar"

// custom hooks
import useWindowDimensions from "../../hooks/useWindowSize"

const NavbarController = () => {

    const { width } = useWindowDimensions();
    const location = useLocation().pathname

    return (
        <>
            {
                width <= 562 ? <MobileNavbar /> : <Navbar />
            }

            {
                (width <= 562 && location === "/") && <MobileTopNavbar />
            }
        </>
    )
}

export default NavbarController