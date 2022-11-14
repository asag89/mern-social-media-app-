
import { useSelector, useDispatch } from "react-redux"
import { showModal } from "../../features/modal/modalSlice"

import { useLocation } from "react-router-dom"
import { useEffect } from "react"

import PostContent from "../post/PostContent"

// custom hooks
import useWindowDimensions from "../../hooks/useWindowSize"
import { useScrollLock } from "../../hooks/useScrollLock"


import MobileCloseModalTab from "../general/MobileCloseModalTab"

import Container from "../../assets/containers/PostModal"

const PostModal = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const { lockScroll, unlockScroll } = useScrollLock();
    const { post, isLoading } = useSelector((state) => state.post)
    const { modalLocation } = useSelector((state) => state.modal)
    const { width } = useWindowDimensions();

    useEffect(() => {
        lockScroll()

        return () => {
            unlockScroll()
        }
    }, [lockScroll, unlockScroll])

    useEffect(() => {
        if (location.pathname !== modalLocation) {
            dispatch(showModal(null))
        }
    }, [dispatch, location.pathname, modalLocation])

    return (
        <Container onClick={() => dispatch(showModal(null))}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {
                    width <= 562 &&
                    <MobileCloseModalTab text={"Comments"} />
                }
                <div className="wrapper">
                    {
                        width > 880 &&
                        <div className="img-container">
                            <img src={post.image} alt="" />
                        </div>
                    }
                    {
                        !isLoading &&
                        <PostContent post={post} width={"450px"} more={false} />
                    }
                </div>
            </div>
        </Container>
    )
}

export default PostModal