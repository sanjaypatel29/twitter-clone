import React, { useState } from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import { Redirect } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../Redux/AuthReducer/action"


function Login() {

    const err = useSelector(state => state.auth.err)
    const auth = useSelector(state => state.auth.auth)
    const dispatch = useDispatch()
    console.log(err, auth)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        console.log(email, password)
        dispatch(login({ email, password }))
    }
    return (
        <>
            {
                auth ? (
                    <Redirect to={{ pathname: "/home" }} />
                ) :
                    <div className="container">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="text-center ml-5 col-7">
                                <TwitterIcon className="text-primary mt-4" style={{ fontSize: "50px", marginTop: "20px" }} />
                                <h4 className="mt-4 font-weight-bolder"> Log in to Twitter</h4>
                                <form onSubmit={handleLogin}>
                                    <div className="border-bottom bg-light mt-4 p-2 px-3 text-left">
                                        <span className="text-muted">Phone, email, or username</span><br />
                                        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ height: "40px", outline: "none", fontSize: "30px" }} className="border-0  w-100 bg-light" type="text" />
                                    </div>
                                    <div className="border-bottom bg-light mt-4 p-2 px-3 text-left">
                                        <span className="text-muted">Password</span><br />
                                        <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ height: "40px", outline: "none", fontSize: "30px" }} className="border-0  w-100 bg-light" type="password" />
                                    </div>
                                    <button type="submit" className="mt-4 text-white bg-primary border border-primary rounded-pill font-weight-bold" style={{ height: "50px", outline: "none", width: "100%" }}>Login</button>
                                </form>
                                <div>{err}</div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Login
