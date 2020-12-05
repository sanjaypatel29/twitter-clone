import React from 'react'
import SidebarOption from './SidebarOption'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmailIcon from '@material-ui/icons/Email';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HttpsIcon from '@material-ui/icons/Https';
import { useDispatch } from "react-redux"
import { logout } from "../Redux/AuthReducer/action"
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
function Sidebar() {
    const dispatch = useDispatch()

    const data = JSON.parse(localStorage.getItem("userData"))

    const handleLogout = () => {
        console.log("5")
        alert("Logout Confirm?")
        dispatch(logout())
    }
    return (
        <div>
            <TwitterIcon className="text-primary" style={{ fontSize: "40px", marginTop: "15px" }} />
            <SidebarOption active="true" text="Home" Icon={HomeIcon} />
            <SidebarOption text="Explore" Icon={SearchOutlinedIcon} />
            <SidebarOption text="Notification" Icon={NotificationsNoneIcon} />
            <SidebarOption text="Messages" Icon={EmailIcon} />
            <SidebarOption text="Bookmarks" Icon={TurnedInNotIcon} />
            <SidebarOption text="Lists" Icon={ListAltIcon} />
            <SidebarOption text="Profile" Icon={PermIdentityIcon} />
            <SidebarOption text="More" Icon={MoreHorizIcon} />
            <button className="mt-2 text-white bg-primary border-0 rounded-pill font-weight-bold" style={{ height: "56px", outline: "none", width: "250px" }}>Tweet</button>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="mt-4">
                <button style={{ outline: "none", border: "none" }} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                    <div className="row bg-white">
                        <div className="col-2 mr-4">
                            <img style={{ width: "50px", borderRadius: "50%" }} src={data.user.profileImage} alt="profilepi" />
                        </div>
                        <div className="col-6 ml-2 mr-2">
                            <div className="row">
                                <span className="font-weight-bold">{data.user.name}</span>
                                <HttpsIcon />
                            </div>
                            <div className="row">
                                <span>@{data.user.tHandle}</span>
                            </div>
                        </div>
                        <div className="col-1 mt-2">
                            <MoreHorizIcon />
                        </div>
                    </div>
                </button>
                <div className="dropdown-menu" style={{ width: "270px", marginLeft: "-10", borderRadius: "25px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                    <div className="col-12">
                        <div className="row bg-white">
                            <div className="col-2 mr-4">
                                <img style={{ width: "50px", borderRadius: "50%" }} src={data.user.profileImage} alt="profilepi" />
                            </div>
                            <div className="col-6 ml-2 ">
                                <div className="row">
                                    <span className="font-weight-bold">{data.user.name}</span>
                                    <HttpsIcon />
                                </div>
                                <div className="row">
                                    <span>@{data.user.tHandle}</span>
                                </div>
                            </div>
                            <div className="col-1 text-primary mt-2">
                                <CheckOutlinedIcon />
                            </div>
                        </div>
                        <hr />
                        <div className="p-2 mt-2">
                            <span>Add an existing account</span>
                        </div>
                        <hr />
                        <div className="p-2 mt-2">
                            <button className="pr-5 border-0 bg-white pt-2" style={{ outline: "none" }} onClick={handleLogout}>Log out @{data.user.tHandle}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
