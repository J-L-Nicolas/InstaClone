const initState = null

const Feed = (state = initState, action) => {

    switch (action.type){

        case "FEED_ACTION":
            return action.payload
            break;

        default:
            return state
    }
}

export default Feed
