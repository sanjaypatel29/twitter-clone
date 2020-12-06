import React from 'react'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BackupIcon from '@material-ui/icons/Backup';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function Tweets({ title, image, verified, profileImage, name, tHandle, time, like, comment, share }) {
    return (
        <div className="container border">
            <div className="row border">
                <div className="col-1 p-1">
                    <img style={{ width: "60px", borderRadius: "50%" }} src={profileImage} alt="profilepi" />
                </div>
                <div className="col-10 p-1 px-3 ml-3">
                    <div className="row">
                        <span className="font-weight-bold">{name}</span>
                        {
                            verified ? (<i className="fa fa-check-circle text-primary m-1" aria-hidden="true"></i>) : null
                        }
                        <span className="ml-3 text-muted">@{tHandle}</span>
                        <span className="ml-2 text-muted ">{time}</span>
                        <MoreHorizIcon className="text-muted" style={{ marginLeft: "60%" }} />
                    </div>
                    <div className="row" style={{ width: "95%" }}>
                        <p>{title}
                        </p>
                    </div>
                    <div className="row border" style={{ height: "300px", borderRadius: "30px" }}>
                        <img style={{ width: "100%", height: "300px", borderRadius: "30px" }} src={image} alt="postImg" />
                    </div>
                    <div className="row mt-2 ml-1 mb-2 d-flex text-muted justify-content-between" style={{ width: "95%" }}>
                        <div><ChatBubbleOutlineIcon /><span className="ml-1">{comment}</span></div>
                        <div><RepeatIcon /><span className="ml-1">{share}</span></div>
                        <div><FavoriteBorderIcon /><span className="ml-1">{like}</span></div>
                        <div><BackupIcon /></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Tweets
