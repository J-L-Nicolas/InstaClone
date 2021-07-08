const initState = []

const Comments = (state = initState, action) => {

    switch (action.type){

        case "COMMENTS_ADD":
            return action.payload
            break;

        default:
            return state
    }
}

export default Comments