import React from "react"
import "../header/Header.css"
import AlbumTitle from "../album-title/AlbumTitle"

function Header(props) {
    return (
        <header className="Header">
            <div>
                <AlbumTitle />

                <h2>The new release from <strong>Beasley the Bard</strong></h2>

                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/beasley.png" alt="Beasley the Bard" />
            </div>
        </header>
    )
}
export default Header;