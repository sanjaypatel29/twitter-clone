import React, { useState } from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { signUp } from "../Redux/AuthReducer/action"

function Dashboard() {

    const err = useSelector(state => state.auth.err)
    const auth = useSelector(state => state.auth.auth)
    const dispatch = useDispatch()
    console.log(err, auth)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [dob, setDob] = useState("")
    const [tHandle, setTHandle] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [name, setName] = useState("")

    const handleRegister = () => {
        console.log(email, password, dob, name, profileImage, tHandle)
        dispatch(signUp({ email, password, dob, name, profileImage, tHandle }))
    }

    return (
        <>
            <div className="container-fluid pl-0">
                <div className="row">
                    <div className="col-6" >
                        <img className="w-100" src="https://www.linkpicture.com/q/twitter_12.png" alt="dashpageImg" />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4 px-4" style={{ marginTop: "7%" }}>
                        <TwitterIcon className="text-primary" style={{ fontSize: "50px", marginTop: "20px" }} />
                        <h1 className="font-weight-bold mt-4 mb-5">See what’s happening in the world right now</h1>
                        <h5 className="mt-5 font-weight-bold">Join Twitter today.</h5>
                        {/* <!-- Button trigger modal --> */}
                        <button className="mt-3 text-white bg-primary border-0 rounded-pill font-weight-bold" data-toggle="modal" data-target="#Signnup" style={{ height: "50px", outline: "none", width: "100%" }}>Sign up</button>


                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="Signnup" tabIndex="-1" role="dialog" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="container">
                                            <div className="row">
                                                <div className="text-center col-12">
                                                    <div className=" row d-flex">
                                                        <TwitterIcon className="text-primary flex-grow-1 ml-3" style={{ fontSize: "30px", }} />
                                                        <button type="button" className="btn btn-primary font-weight-bold rounded-pill" onClick={handleRegister}>Next</button>
                                                    </div>
                                                    <div className="row">
                                                        <h4 className="font-weight-bolder float-left"> Create Your Account</h4>
                                                    </div>
                                                    <form onSubmit={handleRegister}>
                                                        <div className="border-bottom bg-light mt-4 p-2 px-3 text-left">
                                                            <span className="text-muted">name</span><br />
                                                            <input name="name" value={name} onChange={(e) => setName(e.target.value)} style={{ height: "30px", outline: "none", fontSize: "30px" }} className="border-0  w-100 bg-light" type="text" />
                                                        </div>

                                                        <div className="border-bottom bg-light mt-4 p-2 px-3 text-left">
                                                            <span className="text-muted ">email</span><br />
                                                            <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ height: "30px", outline: "none", fontSize: "30px" }} className="border-0  w-100 bg-light" type="text" />
                                                        </div>

                                                        <div className="border-bottom bg-light mt-4 p-2 px-3 text-left">
                                                            <span className="text-muted">Password</span><br />
                                                            <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ height: "30px", outline: "none", fontSize: "30px" }} className="border-0  w-100 bg-light" type="password" />
                                                        </div>

                                                        <div className="border-bottom bg-light mt-4 p-2 px-3 text-left">
                                                            <span className="text-muted">profileImage</span><br />
                                                            <input name="profileImage" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} style={{ height: "30px", outline: "none", fontSize: "30px" }} className="border-0  w-100 bg-light" type="text" />
                                                        </div>

                                                        <div className="border-bottom bg-light mt-4 p-2 px-3 text-left">
                                                            <span className="text-muted">twitterHandle</span><br />
                                                            <input name="twitterHandle" value={tHandle} onChange={(e) => setTHandle(e.target.value)} style={{ height: "30px", outline: "none", fontSize: "30px" }} className="border-0  w-100 bg-light" type="text" />
                                                        </div>

                                                        <div className="border-bottom bg-light mt-4 p-2 px-3 text-left">
                                                            <span className="text-muted">Date of birth</span><br />
                                                            <input name="dob" value={dob} onChange={(e) => setDob(e.target.value)} style={{ height: "30px", outline: "none", fontSize: "30px" }} className="border-0  w-100 bg-light" type="date" />
                                                        </div>
                                                        <button type="submit" className="mt-4 text-white bg-primary border border-primary rounded-pill font-weight-bold" style={{ height: "50px", outline: "none", width: "100%" }}>SignUp</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link style={{ color: "white", textDecoration: "none" }} to="/login">
                            <button className="mt-3 text-primary bg-white border border-primary rounded-pill font-weight-bold" style={{ height: "50px", outline: "none", width: "100%" }}>Login</button>
                        </Link>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row text-muted mt-3" style={{ marginLeft: "6%" }}>
                    <span className="m-1">About</span>
                    <span className="m-1">Help Center</span>
                    <span className="m-1">Terms of Service</span>
                    <span className="m-1">Privacy Policy</span>
                    <span className="m-1">Cookie Policy</span>
                    <span className="m-1">Ads info</span>
                    <span className="m-1">Blog</span>
                    <span className="m-1">Status</span>
                    <span className="m-1">Career</span>
                    <span className="m-1">Brand Resources</span>
                    <span className="m-1">Advertising</span>
                    <span className="m-1">Marketing</span>
                    <span className="m-1">Twitter for Bussiness</span>
                    <span className="m-1">Developer</span>
                    <span className="m-1">Directory</span>
                    <span className="m-1">Setting</span>
                </div>
                <div className="row text-muted justify-content-center">
                    <span><i className="fa fa-copyright" aria-hidden="true"></i> 2020 Twitter Inc.</span>
                </div>
            </div>
        </>
    )
}

export default Dashboard
