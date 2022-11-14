

import { useScrollLock } from "../../hooks/useScrollLock";
import { showModal, showNestedModal } from "../../features/modal/modalSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useWindowDimensions from "../../hooks/useWindowSize";
import MobileCloseModalTab from "../general/MobileCloseModalTab";
import { deletePost } from "../../features/post/postSlice";

import Container from "../../assets/containers/NestedPostOptionsModal";

import { postOptionsLinks } from "../../utils/NavlLinks";

const NestedPostOptionsModal = () => {
    const dispatch = useDispatch()
    const { post } = useSelector((state) => state.post)

    const { lockScroll, unlockScroll } = useScrollLock();
    const { width } = useWindowDimensions();
    const { user } = useSelector((state) => state.currentUser)

    useEffect(() => {
        lockScroll()

        return () => {
            unlockScroll()
        }
    }, [lockScroll, unlockScroll])

    return (
        <Container onClick={() => dispatch(showNestedModal(null))}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {width <= 562 &&
                    <MobileCloseModalTab text={"options"} />
                }
                <div className="wrapper">
                    {
                        user._id === post.createdBy._id ?
                            <div className="item danger" onClick={() => { dispatch(deletePost(post._id)); dispatch(showNestedModal(null)); dispatch(showModal(null)) }}>Delete</div>
                            :
                            <div className="item danger">Report</div>
                    }
                    {postOptionsLinks.map((item) => (
                        <div key={item.index} className="item">
                            {item.text}
                        </div>
                    ))}
                    <div className="item" onClick={() => dispatch(showNestedModal(null))}>Cancel</div>
                </div>
            </div>
        </Container>
    )
}

export default NestedPostOptionsModal