import { BASE_URL, API_ENDPOINT } from "../constants"

export function fetchInfo() {
    console.log("fetching")
    return async (dispatch) => {
        dispatch({type: "BEDTIME_FETCH_ATTEMPT"})
        const request = await fetch(`http://10.1.240.57:3000/api/v1/user/bedtime`)
        const data = await request.json()
        console.log(data)
        if(data.err)
            return dispatch({type: "BEDTIME_FETCH_ERROR", payload: data.err})
        return dispatch({type: "BEDTIME_FETCH_SUCCESS", payload: data.bedtime})
    }
}