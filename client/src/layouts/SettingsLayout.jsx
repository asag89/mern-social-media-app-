
import { Outlet } from "react-router-dom"

import useWindowDimensions from "../hooks/useWindowSize"
import SettingsTab from "../components/general/SettingsTab"

import Container from "../assets/containers/SettingsLayout"

const SettingsLayout = () => {

    const { width } = useWindowDimensions();

    return (
        <Container>
            {width > 940 &&
                <SettingsTab showArrow={width <= 940} />
            }
            <Outlet />
        </Container>
    )
}

export default SettingsLayout