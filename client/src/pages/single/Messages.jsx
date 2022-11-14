
import { Helmet } from 'react-helmet-async'
import MobileBackNavigate from "../../components/general/MobileBackNavigate"
import useWindowDimensions from "../../hooks/useWindowSize"

import Container from "../../assets/containers/Messages"

const Messages = () => {
    const { width } = useWindowDimensions()
    return (
        <Container>
            <Helmet>
                <title>Messages</title>
            </Helmet>
            {width <= 562 &&
                <MobileBackNavigate text={"messages"} />
            }
            This Page is Under Construction
        </Container>
    )
}

export default Messages