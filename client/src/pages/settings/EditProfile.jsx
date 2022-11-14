
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { update } from "../../features/currentUser/currentUserSlice"
import { useNavigate } from "react-router-dom"
import ScrollToTop from "../../components/general/ScrollToTop"
import { Helmet } from 'react-helmet-async'

import MobileBackNavigate from "../../components/general/MobileBackNavigate"
import useWindowDimensions from "../../hooks/useWindowSize"
import useFileUpload from "../../hooks/useFileUpload"
import SettingsItem from "../../components/general/SettingsItem"
import SmallSpinner from "../../components/spinners/SmallSpinner"

import Container from "../../assets/containers/EditProfile"

const EditProfile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading } = useSelector((state) => state.currentUser)
    const { width } = useWindowDimensions()
    const [userCredentials, setUserCredentials] = useState(user)
    const [photo, setPhoto] = useState(null)
    const { uploadImage } = useFileUpload()

    const handleChange = (e) => {
        setUserCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (photo) {
            uploadImage(photo).then((imageUrl) => {
                let userData = {}
                userData = { ...userCredentials }
                delete userData.userPhoto
                userData.userPhoto = imageUrl
                dispatch(update(userData))
            }).catch((err) => {
            })
        }
        else {
            dispatch(update(userCredentials))
            if (!isLoading) {
                setTimeout(() => {
                    navigate(`/profile/${user.username}`)
                }, [1000])
            }
        }
    }
    return (
        <Container>
            <Helmet>
                <title>Edit profile | Ankrom</title>
            </Helmet>
            <div className="settings">
                {width <= 562 &&
                    <MobileBackNavigate text={"edit profile"} />
                }

                {/* first header */}
                <SettingsItem type={"header"} h3Text={"Profile Information"} descText={"Your profile information appears on your Profile page, as your byline, and in your responses."} />

                {/* username (unchangeable) */}
                <SettingsItem type={"inputUsername"} name={"username"} value={userCredentials.username} descText={"Other users can find you by username. (Cannot be changed)"} labelText={"Username"} />

                {/* name */}
                <SettingsItem type={"inputText"} name={"name"} value={userCredentials.name} handleChange={handleChange} labelText={"Name"} />

                {/* userPhoto */}
                <SettingsItem type={"inputFile"} name={"userPhoto"} photo={photo} setPhoto={setPhoto} userPhoto={userCredentials.userPhoto} value={userCredentials.name} handleChange={handleChange} labelText={"Change profile photo"} />

                {/* biography */}
                <SettingsItem type={"textarea"} name={"biography"} value={userCredentials.biography} handleChange={handleChange} labelText={"Biography"} />

                {/* website */}
                <SettingsItem type={"inputText"} name={"website"} value={userCredentials.website} handleChange={handleChange} labelText={"Website"} />

                {/* second header */}
                <SettingsItem type={"header"} h3Text={"Personal Information"} descText={"Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile."} />

                {/* email */}
                <SettingsItem type={"inputText"} name={"email"} value={userCredentials.email} handleChange={handleChange} labelText={"Email"} />

                {/* gender unchangeable */}
                <SettingsItem type={"inputText"} name={"gender"} value={"Prefer not to say"} handleChange={handleChange} labelText={"Gender"} />

                {/* submit button */}
                <SettingsItem type={"submitBtn"} value={isLoading ? <SmallSpinner size={"13px"} color={"#fff"} /> : "Submit"} handleSubmit={handleSubmit} />

            </div>
            {/* if page change, scroll 0,0 */}
            <ScrollToTop />
        </Container>
    )
}

export default EditProfile