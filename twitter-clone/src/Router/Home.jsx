import React from 'react'
import Feed from '../Components/Feed'
import Sidebar from '../Components/Sidebar'
import Widgets from '../Components/Widgets'

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 ml-5">
                    <Sidebar />

                </div>
                <div className="col-6 ml-3">
                    <Feed />
                </div>
                <div className="col-3 mr-5">
                    <Widgets />
                </div>
            </div>
        </div>
    )
}

export default Home
