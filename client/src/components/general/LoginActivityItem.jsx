
import { handleActivityVerification } from "../../features/loginActivity/loginActivitySlice"
import moment from "moment"
import { useDispatch } from "react-redux"
import { confirmActivity } from "../../features/loginActivity/loginActivitySlice"
import { showModal } from "../../features/modal/modalSlice"

import Container from "../../assets/containers/LoginActivityItem"
const LoginActivityItem = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <Container>
            <div>
                <div className="ago">{moment(item.createdAt).fromNow()}</div>
                <div className="techs">({item.browserName}, {item.osName})</div>
            </div>
            {
                item.isConfirmed ?
                    <div className="verification-confirmed">
                        Successfully confirmed <button className="btn-undo" onClick={() => dispatch(confirmActivity({ activityId: item._id, confirm: false }))}> Undo?</button>
                    </div> :

                    <div className="verification">
                        <button className="verification-btn" onClick={() => { dispatch(showModal("activityVerification")); dispatch(handleActivityVerification({ type: "was", activityId: item._id })) }}>This Was Me</button>
                        <button className="verification-btn" onClick={() => { dispatch(showModal("activityVerification")); dispatch(handleActivityVerification({ type: "wasn't" })) }}>This Wasn't Me</button>
                    </div>
            }
        </Container>
    )
}

export default LoginActivityItem