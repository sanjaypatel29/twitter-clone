import React from 'react'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BackupIcon from '@material-ui/icons/Backup';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function Tweets() {
    return (
        <div className="container border">
            <div className="row border">
                <div className="col-1 p-1">
                    <img style={{ width: "60px", borderRadius: "50%" }} src="https://pbs.twimg.com/profile_images/1255742917873786883/56R4sLLy_400x400.jpg" alt="profilepi" />
                </div>
                <div className="col-10 p-1 px-3 ml-3">
                    <div className="row">
                        <span className="font-weight-bold">Sanjay</span>
                        <i className="fa fa-check-circle text-primary m-1" aria-hidden="true"></i>
                        <span className="ml-3 text-muted">@Sanjay123</span>
                        <span className="ml-2 text-muted ">10m</span>
                        <MoreHorizIcon className="text-muted" style={{ marginLeft: "60%" }} />
                    </div>
                    <div className="row" style={{ width: "95%" }}>
                        <p>#HTLS2020 Day 3 | Chefs Gaggan Anand,
                        @massimobottura
                        to open the first session

                        Track updates here - https://bit.ly/3mBV0AS
                        Watch here - http://youtube.com/embed/rSCYvHMkxKo?autoplay=1&mute=1 Stay tuned!
                        </p>
                    </div>
                    <div className="row border" style={{ height: "300px", borderRadius: "30px" }}>
                        <img style={{ width: "100%", height: "300px", borderRadius: "30px" }} src="https://acegif.com/wp-content/uploads/dog-chasing-tail.gif" alt="postImg" />
                    </div>
                    <div className="row mt-2 ml-1 mb-2 d-flex text-muted justify-content-between" style={{ width: "95%" }}>
                        <ChatBubbleOutlineIcon />
                        <RepeatIcon />
                        <FavoriteBorderIcon />
                        <BackupIcon />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Tweets
