import { BASE_URL, API_ENDPOINT } from "../constants"
å
export function fetchInfo() {
    return async (dispatch) => {
        dispatch({type: "BEDTIME_FETCH_ATTEMPT"})
        const request = await fetch(`${BASE_URL}${API_ENDPOINT}/user/bedtime`)
        const data = await request.json()
        if(data.err)
            return dispatch({type: "BEDTIME_FETCH_ERROR", payload: data.err})
        return dispatch({typee: "BEDTIME_FETCH_SUCCESS", payload: data.bedtime})
    }
}