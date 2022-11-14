
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Helmet } from 'react-helmet-async'
import { clearError, login } from "../../features/currentUser/currentUserSlice"

import { MdVisibility } from "react-icons/md"

import Footer from "../../components/general/Footer"
import BlockSpinner from "../../components/spinners/BlockSpinner"
import SmallSpinner from "../../components/spinners/SmallSpinner"

import Container from "../../assets/containers/Login"
const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [loginUser, setloginUser] = useState({
        email: "",
        password: ""
    })

    const { email, password } = loginUser
    const { user, isLoading, isError, message } = useSelector((state) => state.currentUser)

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/")
            }, [200])
        }
    }, [user, navigate])

    const handleChange = (e) => {
        setloginUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({ email, password }))
    }

    if (user) {
        return <BlockSpinner />
    }

    return (
        <Container>
            <Helmet>
                <title>Login | Ankrom</title>
            </Helmet>
            <div className="wrapper">
                <div className="login">
                    <h1 className="logo">Ankrom</h1>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-grp">
                            <input type="text" name="email" value={email} onChange={handleChange} autoComplete="off" required />
                            <label>Email</label>
                        </div>
                        <div className="form-grp">
                            <div className="password-wrapper">
                                <input type={showPassword ? "text" : "password"} name="password" value={password} onChange={handleChange} autoComplete="off" required />
                                <label>Password</label>
                                <MdVisibility className="visibilityIcon" fill="#000" onClick={() => setShowPassword(!showPassword)} />
                            </div>
                        </div>
                        <div className="form-grp">
                            <button type="submit" className="btn-submit" disabled={!email || !password}>{isLoading ? <SmallSpinner size={"14px"} /> : "Login"}</button>
                        </div>
                        {
                            isError &&
                            <div className="form-grp">
                                <p className="error-msg">{message}</p>
                            </div>
                        }

                        <div className="form-grp">
                            <p className="forget-password">Did you forget your password?</p>
                        </div>
                        <div className="form-grp">
                            <p className="redirect">Don't have an account? <Link onClick={() => dispatch(clearError())} to="/register" className="redirect-link"><span>Register</span></Link></p>
                        </div>
                    </form>
                </div>
                <div className="store">
                    <img className="store-png" src="https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/app-store-badge.png?alt=media&token=f3840b07-21e7-463e-b8d8-85f0edb8fc14" alt="app-store" />
                    <img className="store-png" src="https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/google-play-badge.png?alt=media&token=fcad8a70-580a-4a57-a1e4-8615408cdb69" alt="play-store" />
                </div>
                <Footer />
            </div>
        </Container>
    )
}

export default Login