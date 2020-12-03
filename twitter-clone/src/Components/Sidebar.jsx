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

function Sidebar() {
    return (
        <div>
            <TwitterIcon style={{ color: "#2de7ed", fontSize: "40px", marginTop: "20px" }} />
            <SidebarOption active="true" text="Home" Icon={HomeIcon} />
            <SidebarOption text="Explore" Icon={HomeIcon} />
            <SidebarOption text="Notification" Icon={NotificationsNoneIcon} />
            <SidebarOption text="Messages" Icon={EmailIcon} />
            <SidebarOption text="Bookmarks" Icon={TurnedInNotIcon} />
            <SidebarOption text="Lists" Icon={ListAltIcon} />
            <SidebarOption text="Profile" Icon={PermIdentityIcon} />
            <SidebarOption text="More" Icon={MoreHorizIcon} />
            <button className="btn-lg mt-4 text-white bg-primary border-0 w-100 mr-3 rounded-pill">Tweet</button>
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
                    <div className="col-1 mt-2">
                        <MoreHorizIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
