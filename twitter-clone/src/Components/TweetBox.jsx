import React from 'react'
import ImageIcon from '@material-ui/icons/Image';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import MoodIcon from '@material-ui/icons/Mood';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Tweets from './Tweets';

function TweetBox() {
    return (
        <div className="container">
            <div className="row border bg-white">
                <div className="col-1 p-1">
                    <img style={{ width: "60px", borderRadius: "50%" }} src="https://pbs.twimg.com/profile_images/1255742917873786883/56R4sLLy_400x400.jpg" alt="profilepi" />
                </div>
                <div className="col-11 p-2 px-3">
                    <input className="border-0 w-100 h4" style={{ height: "50px", outline: "none" }} placeholder="Whats Happening?" />
                    <input className="border-0 w-100 h6" style={{ height: "20px", outline: "none" }} placeholder="Image url" />

                    <div className="row border-top">
                        <div className="col-9 mt-3" style={{ color: "#28a8f7" }}>
                            <ImageIcon className="mx-2" />
                            <GifIcon className="mx-2" />
                            <PollIcon className="mx-2" />
                            <MoodIcon className="mx-2" />
                            <CalendarTodayIcon />
                        </div>
                        <div className="col-3 mt-3">
                            <button type="button" className="btn btn-primary btn-sm rounded-pill w-75"> Tweet </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-2 bg-white">
                <Tweets />
                <Tweets />
                <Tweets />
                <Tweets />
                <Tweets />
                <Tweets />
                <Tweets />
                <Tweets />
            </div>
        </div>
    )
}

export default TweetBox