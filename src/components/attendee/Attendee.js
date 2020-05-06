import React from "react"
import "./Attendee.css"

function Attendee(props) {
    let guests = ""
    if (props.attendee.guests > 0) {
        guests = `+${props.attendee.guests}`
    }

    return (
        <li className="Attendee">
            {props.attendee.email} {guests}
        </li>
    )
}

export default Attendee