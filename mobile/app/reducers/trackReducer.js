import moment from "moment"

export default function reducer(state={
    inProgress: false,
    startTime: null,
    endTime: null,
    sent: false
}, action) {
    switch(action.type) {
        case "SLEEP_MODE_START": {
            return {...state, startTime: moment().toISOString(), sent: false, inProgress: true, endTime: null}
        }
        case "SLEEP_MODE_END": {
            return {...state, endTime: moment().toISOString(), sent: false, inProgress: false}
        }
        case "SLEEP_MODE_SENT": {
            return {...state, endTime: null, startTime: null, sent: true, inProgress: false}
        }
        default: {
            return {...state}
        }
    }
}