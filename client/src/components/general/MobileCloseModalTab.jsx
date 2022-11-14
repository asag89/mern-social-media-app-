import { IoIosArrowBack } from "react-icons/io"

import { showModal, showNestedModal } from "../../features/modal/modalSlice"
import { useDispatch, useSelector } from "react-redux"

import Container from "../../assets/containers/MobileCloseModalTab"

const MobileCloseModalTab = ({ text }) => {
    const { nestedModalType } = useSelector((state) => state.modal)
    const dispatch = useDispatch()
    return (
        <Container>
            <div className="wrapper">
                {nestedModalType ?
                    <IoIosArrowBack className="icon" onClick={() => dispatch(showNestedModal(null))} />
                    :
                    <IoIosArrowBack className="icon" onClick={() => dispatch(showModal(null))} />
                }
                <h2>{text}</h2>
            </div>
        </Container>
    )
}

export default MobileCloseModalTab