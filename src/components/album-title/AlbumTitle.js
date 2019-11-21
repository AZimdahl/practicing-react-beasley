import React from "react"
import "../album-title/AlbumTitle.css"

function AlbumTitle(props) {
    return (
        <h1 className="AlbumTitle">
            <button>Reveal Album Title</button>
            <span>Night of the Salamander</span>
        </h1>
    )
}

export default AlbumTitle;