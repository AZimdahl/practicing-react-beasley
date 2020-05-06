import React from "react"
import "../attendee-list/AttendeeList"
import Attendee from "../attendee/Attendee";

function AttendeeList(props) {
    const listItems = props.attendees.map((attendee, i) => (
        <Attendee key={i} attendee={attendee}/>
    ))

    return (
        <ul className="AttendeeList">
            {listItems}
        </ul>
    )
}

export default AttendeeList;