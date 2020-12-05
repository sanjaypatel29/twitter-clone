import React from 'react'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import "../Style/Feed.css";
import TweetBox from './TweetBox';

function Feed() {
    return (
        <div className="feed bg-light">
            {/* home Box */}
            <div className="d-flex p-2 sticky-top border bg-white">
                <h3 className="font-weight-bolder flex-grow-1 font-weight-bold">Home</h3>
                <StarBorderRoundedIcon className="text-primary" />
            </div>
            <div>
                <TweetBox />
            </div>
        </div>
    )
}

export default Feed
