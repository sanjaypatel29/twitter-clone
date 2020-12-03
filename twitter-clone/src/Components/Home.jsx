import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Widgets from './Widgets'

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 ml-5">
                    <Sidebar />

                </div>
                <div className="col-6 ml-4">
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
