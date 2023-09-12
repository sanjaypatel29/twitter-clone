import React from 'react'
import "../Style/Widgets.css"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const data = JSON.parse(localStorage.getItem("userData"))


function Widgets() {
    return (
        <div className="feed container ">
            <div className="row p-1 sticky-top bg-white" style={{ height: "60px", width: "110%" }}>
                <div className="border px-3 searchBox rounded-pill bg-light">
                    <input name="searchBox" type="text" className="input ml-5 mt-1 bg-light" placeholder="Search Twitter" />
                </div>
                <i className="fa fa-search icon h4 text-muted" aria-hidden="true"></i>
            </div>

            <div className="row bg-light mt-3" style={{ borderRadius: "25px" }}>
                <div className="col-12">
                    <div className="row py-3 px-3">
                        <span className="font-weight-bolder ">What’s happening</span>
                    </div>
                    <div className="row border">
                        <div className="col-8 my-3">
                            <span className="text-muted">news-LIVE</span>
                            <br />
                            <span className="font-weight-bold">Cyclone Burevi approaches Tamil Nadu coast</span>
                        </div>
                        <div className="col-3 my-2">
                            <img style={{ width: "150%", height: "80px" }} src="https://pbs.twimg.com/amplify_video_thumb/1334364273275887617/img/wzWooJYICDdAjQ34?format=jpg&name=240x240" alt="newImg" />
                        </div>
                    </div>

                    <div className="row border">
                        <div className="col-8 my-3">
                            <span className="text-muted">Covid-19-LIVE</span>
                            <br />
                            <span className="font-weight-bold">COVID-19 in India</span>
                        </div>
                        <div className="col-3 my-2">
                            <img style={{ width: "150%", height: "80px" }} src="https://pbs.twimg.com/semantic_core_img/1255575536824233984/CiLy4der?format=jpg&name=240x240" alt="newImg" />
                        </div>
                    </div>

                    <div className="row border">
                        <div className="col-10 my-3">
                            <span className="text-muted">Trendin In India</span>
                            <br />
                            <span className="font-weight-bold">#Kangna Ranaut</span>
                            <br />
                            <span className="text-muted">Trending with #KangnaRanaut</span>
                        </div>
                        <div className="col-1 my-2">
                            <MoreHorizIcon />
                        </div>
                    </div>

                    <div className="row border ">
                        <div className="col-10 my-3">
                            <span className="text-muted">Trendin In India</span>
                            <br />
                            <span className="font-weight-bold">#CBIRevealSSRMystery</span>
                            <br />
                            <span className="text-muted">Trending with #JiahKhanAwaitsJustice</span>
                        </div>
                        <div className="col-1 my-2">
                            <MoreHorizIcon />
                        </div>
                    </div>

                    <div className="row py-3 px-3">
                        <span className="font-weight-bolder text-primary ">Show More</span>
                    </div>
                </div>
            </div>

            <div className="row mt-4 bg-light" style={{ borderRadius: "25px" }}>
                <div className="col-12">
                    <div className="row py-3 px-3">
                        <span className="font-weight-bolder">Who to follow</span>
                    </div>

                    <div className="row py-3">
                        <div className="col-2 mr-4">
                            <img style={{ width: "50px", borderRadius: "50%" }} src="https://pbs.twimg.com/profile_images/1186333396873732096/Elg8rktK_400x400.jpg" alt="profilepi" />
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <span className="font-weight-bold">Ronna McDaniel</span>
                                <i className="fa fa-check-circle text-primary m-1" aria-hidden="true"></i>
                            </div>
                            <div className="row">
                                <span>@GOPChairwoman</span>
                            </div>
                        </div>
                        <div className="col-2  mt-2">
                            <button type="button" className="btn btn-outline-primary font-weight-bold rounded-pill">Follow</button>
                        </div>
                    </div>

                    <div className="row py-3">
                        <div className="col-2 mr-4">
                            <img style={{ width: "50px", borderRadius: "50%" }} src="https://pbs.twimg.com/profile_images/1255742917873786883/56R4sLLy_400x400.jpg" alt="profilepi" />
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <span className="font-weight-bold">Sanjay Patel</span>
                            </div>
                            <div className="row">
                                <span>@Sanjay123</span>
                            </div>
                        </div>
                        <div className="col-2  mt-2">
                            <button type="button" className="btn btn-outline-primary font-weight-bold rounded-pill">Follow</button>
                        </div>
                    </div>

                    <div className="row py-3 px-3">
                        <span className="font-weight-bolder text-primary ">Show More</span>
                    </div>
                </div>
            </div>

            <div className="row text-muted d-flex justify-content-between mt-3 mb-5">
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
                <span>Cookie Policy</span>
                <br />
                <span>Ads info</span>
                <span>More ...</span>
                <span className="mb-5"><i className="fa fa-copyright" aria-hidden="true"></i> 2020 Twitter, Inc.</span>
            </div>

        </div >
    )
}

export default Widgets
