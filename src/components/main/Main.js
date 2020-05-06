import React, { Component } from "react"
import "../main/Main.css"
import SignUpForm from "../sign-up-form/SignUpForm"
import AttendeeList from "../attendee-list/AttendeeList"

class Main extends Component {

    /* this.props.addAttendee() must be initialized
    or get an error about this.props.attendees not being iterable */
    componentDidMount() {
        this.props.addAttendee([])
    }

    /* Proud of figuring the following out because the way I was doing it,
    I was getting error message about this.props.attendees not being iterable */
    addAttendee = (attendee) => {
        let addingAttendee = [...this.props.attendees, attendee]
        this.props.addAttendee(addingAttendee)
    }


    render() {

        return (
            <main className="Main">
                <h3>Album release party</h3>

                <p>We hope to see <em>you</em> <strong>October 13</strong>!</p>

                <SignUpForm addAttendee={this.addAttendee} />

                <h1 className="dark">Pre-order now!</h1>
                <p className="dark">The cool kids will all be there</p>

                {/* It took me the longest time to realize it's easiest to just conditionally render this.
                I was getting issues that were caused by asyncronisity */}
                {this.props.attendees && <AttendeeList attendees={this.props.attendees} />}
            </main>
        )
    }
}

export default Main;