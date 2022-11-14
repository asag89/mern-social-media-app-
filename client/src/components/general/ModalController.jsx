
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

import PostModal from "../modal/PostModal"
import CreatePostModal from "../modal/CreatePostModal"
import FllwModal from "../modal/FllwModal"
import ActivityVerificationModal from "../modal/ActivityVerificationModal"
import SettingsTabModal from "../modal/SettingsTabModal"
import PostLikesModal from "../modal/PostLikesModal"
import DeleteAccountConfirmModal from "../modal/DeleteAccountConfirmModal"
import NestedPostOptionsModal from "../modal/NestedPostOptionsModal"

// custom hooks

const ModalController = () => {
    const { modalType, nestedModalType } = useSelector((state) => state.modal)
    const location = useLocation().pathname

    return (
        <>
            {
                modalType === "read" && <PostModal />
            }

            {
                modalType === "create" && <CreatePostModal />
            }

            {
                ((modalType === "follower" || modalType === "following") && location.startsWith("/profile")) && <FllwModal />
            }

            {
                modalType === "settingTab" && <SettingsTabModal />
            }

            {
                modalType === "activityVerification" && <ActivityVerificationModal />
            }

            {
                modalType === "postLikes" && <PostLikesModal />
            }

            {
                modalType === "deleteAccountConfirm" && <DeleteAccountConfirmModal />
            }

            {
                nestedModalType === "nestedPostOptions" && <NestedPostOptionsModal />
            }
        </>
    )
}

export default ModalController