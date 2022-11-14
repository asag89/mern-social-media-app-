
import { useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"

import Container from "../../assets/containers/MobileBackNavigate"

const MobileBackNavigate = ({ text }) => {

    const navigate = useNavigate()
    return (
        <Container>
            <div className="wrapper">
                <IoIosArrowBack className="icon" onClick={() => navigate(-1)} />
                <h2>{text}</h2>
            </div>
        </Container>
    )
}

export default MobileBackNavigate