export default function reducer(state={
    items: [],
}, action) {
    switch(action.type) {
        case "HISTORY_FETCH_COMPLETE": {
            return {...state, items: action.payload}
        }
        default: {
            return {...state}
        }
    }
}