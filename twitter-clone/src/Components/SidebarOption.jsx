import React from 'react'
import '../Style/SidebarOption.css'

function SidebarOption({ active, text, Icon }) {
    return (
        <div className={`sidebarOption p-2 my-2 ${active && "sidebarActive"}`}>
            <Icon style={{ fontSize: "30px" }} />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption