
import { MdOutlinePersonPin } from "react-icons//md"
import Container from "../../assets/containers/ProfileTagged"

const ProfileTagged = () => {
    return (
        <Container>
            <div className="no-post-container">
                <div className="icon-wrapper">
                    <MdOutlinePersonPin className="icon" />
                </div>
                <h2>No Photos</h2>
            </div>
        </Container>
    )
}

export default ProfileTagged