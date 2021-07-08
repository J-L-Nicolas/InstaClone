const initState = null

const Deatil = (state = initState, action) => {

    switch (action.type){

        case "DETAIL_ACTION":
            return action.payload
            break;

        default:
            return state
    }
}

export default Deatil
