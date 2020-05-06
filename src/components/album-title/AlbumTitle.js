import React, { Component } from "react"
import "../album-title/AlbumTitle.css"

class AlbumTitle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTitle: false
        }
    }

    revealTitle = (event) => {
        this.setState({
            showTitle: true
        })
    }

    render() {
        let revealButton = (
            <button onClick={this.revealTitle}>
                Reveal Album Title
            </button>
        )
        let titleSpan = ""

        if (this.state.showTitle) {
            revealButton = ""
            titleSpan = <span>Night of the Salamander</span>
        }

        return (
            <h1 className="AlbumTitle">
                {revealButton}
                {titleSpan}
            </h1>
        )
    }
}

export default AlbumTitle;