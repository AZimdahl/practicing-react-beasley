import React from "react"
import "../main/Main.css"
import SignUpForm from "../sign-up-form/SignUpForm"
import AttendeeList from "../attendee-list/AttendeeList"

function Main(props) {
    return (
        <main className="Main">
            <h3>Album release party</h3>

            <p>We hope to see <em>you</em> <strong>October 13</strong>!</p>

            <SignUpForm />

            <h1 className="dark">Pre-order now!</h1>
            <p className="dark">The cool kids will all be there</p>

            <AttendeeList />
        </main>
    )
}

export default Main;