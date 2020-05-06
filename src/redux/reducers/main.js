const main = ( state = {}, action )=>{
    switch( action.type ){
        case 'ADD_ATTENDEE':
            return Object.assign( {}, state, {
                attendees: action.payload
            } );

        default:
            return state;
    }
}
export default main;