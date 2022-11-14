
import { IoNotificationsOutline } from "react-icons/io5"
import { HiHome } from "react-icons/hi"
import { IoCompassOutline, IoMailOutline } from "react-icons/io5"

const leftSideBarLinks = [
    {
        text: "Home",
        icon: <HiHome size={"1.9rem"} />,
        path: "/",
        id: 1
    },
    {
        text: "Notifications",
        icon: <IoNotificationsOutline size={"1.9rem"} />,
        path: "/notifications",
        id: 2
    },
    {
        text: "Messages",
        icon: <IoMailOutline size={"1.8rem"} />,
        path: "/messages",
        id: 3
    },
    {
        text: "Explore",
        icon: <IoCompassOutline size={"2rem"} />,
        path: "/explore",
        id: 4
    }
]

const settingsLinks = [
    {
        text: "Edit profile",
        path: "/settings/edit_Profile",
        id: 1
    },
    {
        text: "Change Password",
        path: "/settings/change_password",
        id: 2
    },
    {
        text: "Notifications",
        path: "/settings/notifications",
        id: 3
    },
    {
        text: "Apps and Websites",
        path: "/settings/manage_access",
        id: 4
    },
    {
        text: "Login Activity",
        path: "/settings/login_activity",
        id: 5
    },
    {
        text: "Privacy and Security",
        path: "/settings/privacy_and_security",
        id: 6
    },
    {
        text: "Account",
        path: "/settings/account",
        id: 7
    }
]

const postOptionsLinks = [

    {
        text: "Share to...",
        index: 1
    },
    {
        text: "Copy link",
        index: 2
    },
    {
        text: "Embed",
        index: 3
    }
]

export { leftSideBarLinks, settingsLinks, postOptionsLinks }