const initState = {
    coordinate: null,
    lookCoordinate: null
}

const map = (state = initState, action) => {

    switch (action.type){

        case "MAP_READ_POSITION":
            return {...state, ...action.payload}
            break;

        case "MAP_LOOK_POSITION":
            return {...state, ...action.payload}
            break;

        default:
            return state
    }
}

export default map
