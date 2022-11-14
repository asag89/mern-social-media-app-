
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { MdVisibility } from "react-icons/md"

import { clearError, register } from "../../features/currentUser/currentUserSlice"
import { registerSchema } from "../../yupSchema/registerValidation"

import Footer from "../../components/general/Footer"

import { Helmet } from 'react-helmet-async'
import { getError } from "../../features/currentUser/currentUserSlice"
import SmallSpinner from "../../components/spinners/SmallSpinner"
import BlockSpinner from "../../components/spinners/BlockSpinner"

import Container from "../../assets/containers/Register"

const Register = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false)
    const [registerUser, setRegisterUser] = useState({
        username: "",
        email: "",
        password: "",
    })

    const { username, email, password } = registerUser

    const { user, isLoading, isError, message } = useSelector((state) => state.currentUser)

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/")
            }, [200])
        }
    }, [user, navigate])

    const handleChange = (e) => {
        setRegisterUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValid = await registerSchema.isValid(registerUser)
        if (!isValid) {
            dispatch(getError("please enter valid credentials"))
            setTimeout(() => {
                dispatch(clearError())
            }, [3000])
        }
        if (isValid) {
            dispatch(register({ username, email, password }))
        }
    }

    if (user) {
        return <BlockSpinner />
    }

    return (
        <Container>
            <Helmet>
                <title>Register | Ankrom</title>
            </Helmet>
            <div className="wrapper">
                <div className="register">
                    <img src="https://firebasestorage.googleapis.com/v0/b/social-media-v2-19789.appspot.com/o/entry.jpg?alt=media&token=3df7ecfb-473f-4747-9a35-e69b9a36136d" className="register-img" alt="register-img" />
                    <div className="register-form-container">
                        <h1 className="logo">Ankrom</h1>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form-grp">
                                <p className="register-form-top">Sign up to see your friends' photos and videos.</p>
                            </div>
                            <div className="form-grp">
                                <input type="text" name="username" value={username} onChange={handleChange} autoComplete="off" required />
                                <label>Username</label>
                            </div>
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
                                <button type="submit" className="btn-submit" disabled={!username || !email || !password}>{isLoading ? <SmallSpinner size={"14px"} /> : "Register"}</button>
                            </div>
                            {
                                isError &&
                                <div className="form-grp">
                                    <p className="error-msg">{message}</p>
                                </div>
                            }
                            <div className="form-grp">
                                <p className="register-policy">By signing up, you agree to the Terms.</p>
                            </div>
                            <div className="form-grp">
                                <p className="redirect">Do you have an account? <Link onClick={() => dispatch(clearError())} to="/login" className="redirect-link"><span>Login</span></Link></p>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </Container>
    )
}

export default Register