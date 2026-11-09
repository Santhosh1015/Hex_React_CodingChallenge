
const initialState = {
    objectList: []
}

const ObjectReducers = (state = initialState, action) => {
    switch (action.type) {

        case "GET_OBJECTS":
            return {
                ...state,
                objectList: action.payload
            }

        case "ADD_OBJECT":
            return { ...state,
                 objectList: [action.payload, ...state.objectList] 
            }

        case "DELETE_OBJECT":
            return {
                ...state,
                objectList: state.objectList.filter((o) => o.id !== action.payload)
            }

        default:
            return state;
    }

}
export default ObjectReducers