
import { Helmet } from 'react-helmet-async'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLoginActivity } from "../../features/loginActivity/loginActivitySlice"
import useWindowDimensions from "../../hooks/useWindowSize"
import MobileBackNavigate from "../../components/general/MobileBackNavigate"
import LoginActivityItem from '../../components/general/LoginActivityItem'
import Container from "../../assets/containers/LoginActivity"

const LoginActivity = () => {

    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.currentUser)
    const { loginActivity } = useSelector((state) => state.loginActivity)

    const { width } = useWindowDimensions()

    useEffect(() => {
        dispatch(getLoginActivity(user._id))
    }, [dispatch, user._id])

    return (
        <Container>
            <Helmet>
                <title>Login activity | Ankrom</title>
            </Helmet>
            {width <= 562 &&
                <MobileBackNavigate text={"login activity"} />
            }
            <div className="wrapper">
                <div className="top">
                    <h2 className="title">Was This You?</h2>
                </div>
                <div className="activities">
                    {loginActivity.map((item) => (
                        <LoginActivityItem key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default LoginActivity