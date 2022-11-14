import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { cancelDeletion, deleteAccount } from "../../features/currentUser/currentUserSlice"
import { showModal } from "../../features/modal/modalSlice"

import Container from "../../assets/containers/DeleteAccountConfirmModal"

const DeleteAccountConfirmModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [confirmDelete, setConfirmDelete] = useState("")
    return (
        <Container>
            <div className="modal">
                <div className="wrapper">
                    <h2>Confirm account deletion</h2>
                    <p className="desc">We’re sorry to see you go. Once your account is deleted, all of your content will be permanently gone</p>
                    <p className="color-danger">This action cannot be undone</p>
                    <p className="modal-confirm-p">To confirm deletion, type “delete” below:</p>
                    <input type="text" value={confirmDelete} onChange={(e) => setConfirmDelete(e.target.value)} />

                    <div className="btn-container">
                        <button className="btn btn-cancel" onClick={() => { dispatch(showModal(null)); dispatch(cancelDeletion()); navigate("/") }}>Cancel</button>
                        <button className="btn btn-delete" disabled={confirmDelete !== "delete"} onClick={() => dispatch(deleteAccount())}>Delete</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default DeleteAccountConfirmModal