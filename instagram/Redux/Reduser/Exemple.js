const initState = null

const Exemple = (state = initState, action) => {

    switch (action.type){

        case "EXEMPLE_ACTION":
            return action.payload
            break;

        default:
            return state
    }
}

export default Exemple
