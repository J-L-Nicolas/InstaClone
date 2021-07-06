const initState = []

const contacts = (state = initState, action) => {

    switch (action.type){

        case "CONTACTS_ADD_CONTACT":
            return action.payload
            break;

        default:
            return state
    }
}

export default contacts
