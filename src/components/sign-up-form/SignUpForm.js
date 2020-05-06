import React, { Component } from "react"
import "../sign-up-form/SignUpForm.css"

class SignUpForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            attendee: {
                email: "",
                guests: 0
            }
        }
    }

    handleChange = (event) => {
        const { attendee } = { ...this.state }
        attendee[event.target.name] = event.target.value;
        this.setState({ attendee })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAttendee({...this.state.attendee})
        this.setState({
            attendee: {
                email: "",
                guests: 0
            }
        })
    }

    render() {
        return (
            <form 
                className="SignUpForm"
                onSubmit={this.handleSubmit}
            >
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={this.state.attendee.email}
                    onChange={this.handleChange}
                />
                <input
                    name="guests"
                    placeholder="# of guests"
                    type="number"
                    value={this.state.attendee.guests}
                    onChange={this.handleChange}
                />
                <button>RSVP</button>
            </form>
        )
    }
}

export default SignUpForm;