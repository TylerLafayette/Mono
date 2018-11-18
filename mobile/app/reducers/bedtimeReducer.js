import moment from "moment"

export default function reducer(state={
    targetBedtime: moment().set({
        hour: 22,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
    }),
    fetched: false,
    loading: false,
    err: false
}, action) {
    switch(action.type) {
        case "BEDTIME_FETCH_SUCCESS": {
            return {...state, targetBedtime: action.payload, fetched: true, loading: false, err: false}
        }
        case "BEDTIME_FETCH_ATTEMPT": {
            return {...state, fetched: false, loading: true, err: false}
        }
        case "BEDTIME_FETCH_ERROR": {
            return {...state, fetched: false, loading: false, err: action.payload || true}
        }
        default: {
            return {...state}
        }
    }
}