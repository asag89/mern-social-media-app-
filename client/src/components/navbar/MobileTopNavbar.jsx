
import { Link } from "react-router-dom"

import Container from "../../assets/containers/MobileTopNavbar"

const MobileTopNavbar = () => {
    return (
        <Container>
            <h1 className="logo">
                <Link to="/">
                    Ankrom
                </Link>
            </h1>
        </Container>
    )
}

export default MobileTopNavbar