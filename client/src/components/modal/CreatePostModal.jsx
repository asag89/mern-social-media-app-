
import { useSelector } from "react-redux"
import { IoImagesOutline } from "react-icons/io5"

import { useEffect, useState } from "react"
import { showModal } from "../../features/modal/modalSlice"
import { useDispatch } from "react-redux"

import { useLocation } from "react-router-dom"
import { createPost } from "../../features/post/postSlice"
import { useScrollLock } from "../../hooks/useScrollLock"

import useWindowDimensions from "../../hooks/useWindowSize"
import MobileCloseModalTab from "../general/MobileCloseModalTab"
import { IoIosArrowBack } from "react-icons/io"
import useFileUpload from "../../hooks/useFileUpload"
import SmallSpinner from "../spinners/SmallSpinner"
import Container from "../../assets/containers/CreatePostModal"

const CreatePostModal = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const { user } = useSelector((state) => state.currentUser)
    const { lockScroll, unlockScroll } = useScrollLock();
    const { width } = useWindowDimensions()
    const [text, setText] = useState("")
    const [imageFile, setImageFile] = useState(null)
    const { modalLocation } = useSelector((state) => state.modal)
    const { isLoading } = useSelector((state) => state.post)

    const [phase, setPhase] = useState(1)
    const { uploadImage } = useFileUpload()

    useEffect(() => {
        if (imageFile) {
            setPhase(2)
        }
    }, [imageFile, phase])

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

    const handleShare = () => {
        if (text && imageFile) {
            uploadImage(imageFile).then((imageUrl) => {
                const post = {
                    text,
                    image: imageUrl
                }
                dispatch(createPost(post))
                dispatch(showModal(null))
            }).catch((err) => {
            })
        }
    }

    return (
        <Container onClick={() => dispatch(showModal(null))}>
            <div className="modal" onClick={(e) => e.stopPropagation()} >
                {(width <= 562 && phase === 1) &&
                    <MobileCloseModalTab text={"Create new post"} />
                }
                {/* select image */}
                {(phase === 1) &&
                    <div className="modal-1" >

                        <h1 className="modal-1-header">Create new post</h1>
                        <IoImagesOutline className="icon" />
                        <div className="text">Drag photos and videos here</div>
                        <button className="btn">
                            <label htmlFor="file">Select from computer</label>
                        </button>
                        <input type="file" id="file" className='file-input' onChange={(e) => setImageFile(e.target.files[0])} />
                    </div>
                }

                {/* enter text */}
                {phase === 2 &&
                    <div className="modal-2">
                        <div className="modal-2-top">
                            <IoIosArrowBack className="back-icon" onClick={() => { setImageFile(null); setPhase(1) }} />
                            <h2>Create new post</h2>
                            <button className="btn-share-top" onClick={() => handleShare()}>{isLoading ? <SmallSpinner size={"14px"} /> : "Share"}</button>
                        </div>
                        <div className="content">
                            <div className="post-img-container">
                                <img src={URL.createObjectURL(imageFile)} className="img" alt="post" />
                            </div>
                            <div className="form-container">
                                <div className="header">
                                    <div className="user-photo-container">
                                        <img src={user.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt="" />
                                    </div>
                                    <div className="username">{user.username}</div>
                                </div>
                                <form className="form">
                                    <div className="form-grp">
                                        <textarea name="" id="" placeholder="Write a caption..." value={text} onChange={(e) => setText(e.target.value)}></textarea>
                                    </div>
                                </form>
                                <div className="btn-share-container">
                                    <button className="btn-share" onClick={() => handleShare()}>{isLoading ? <SmallSpinner size={"14px"} /> : "Share"}</button>
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </Container>
    )
}

export default CreatePostModal