import { connect } from "react-redux";
import Main from "../../components/main/Main";
import { addAttendee } from "../actions";

const mapStateToProps = state => {
    return { attendees : state.main.attendees };
};
const mapDispatchToProps = dispatch => {
    return { addAttendee : (payload) => dispatch( addAttendee(payload) ) }
};

const MainContainer = connect( mapStateToProps, mapDispatchToProps )( Main );
export default MainContainer;