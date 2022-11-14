
import { Helmet } from 'react-helmet-async'
import MobileBackNavigate from "../../components/general/MobileBackNavigate"
import useWindowDimensions from "../../hooks/useWindowSize"

import Container from "../../assets/containers/Notifications"

const Notifications = () => {
    const { width } = useWindowDimensions()

    return (
        <Container>
            <Helmet>
                <title>Notifications</title>
            </Helmet>
            {width <= 562 &&
                <MobileBackNavigate text={"notifications"} />
            }
            This Page is Under Construction
        </Container>
    )
}

export default Notifications