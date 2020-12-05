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
function Sidebar() {
    const dispatch = useDispatch()

    const handleLogout = () => {
        console.log("5")
        alert("Logout Confirm?")
        dispatch(logout())
    }
    return (
        <div>
            <TwitterIcon className="text-primary" style={{ fontSize: "40px", marginTop: "20px" }} />
            <SidebarOption active="true" text="Home" Icon={HomeIcon} />
            <SidebarOption text="Explore" Icon={HomeIcon} />
            <SidebarOption text="Notification" Icon={NotificationsNoneIcon} />
            <SidebarOption text="Messages" Icon={EmailIcon} />
            <SidebarOption text="Bookmarks" Icon={TurnedInNotIcon} />
            <SidebarOption text="Lists" Icon={ListAltIcon} />
            <SidebarOption text="Profile" Icon={PermIdentityIcon} />
            <SidebarOption text="More" Icon={MoreHorizIcon} />
            <button className="mt-3 text-white bg-primary border-0 rounded-pill font-weight-bold" style={{ height: "56px", outline: "none", width: "250px" }}>Tweet</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div >
                <div className="row bg-white">
                    <div className="col-2 mr-4">
                        <img style={{ width: "50px", borderRadius: "50%" }} src="https://pbs.twimg.com/profile_images/1255742917873786883/56R4sLLy_400x400.jpg" alt="profilepi" />
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <span className="font-weight-bold">Sanjay Patel</span>
                            <HttpsIcon />
                        </div>
                        <div className="row">
                            <span>@Sanjay123</span>
                        </div>
                    </div>
                    <div className="btn-group dropup col-1">
                        <button style={{ outline: "none", border: "none" }} type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <MoreHorizIcon />
                        </button>
                        <div className="dropdown-menu">
                            <div className="col-12 col-md-4 col-lg-2">
                                <button className="text-right pr-5 pt-2" onClick={handleLogout}>LogOut</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
