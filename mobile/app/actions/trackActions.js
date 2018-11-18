import moment from "moment"
import { BASE_URL, API_ENDPOINT } from "../constants"

export function startSleep() {
    return async (dispatch) => {
        dispatch({type: "SLEEP_MODE_START"})
    }
}

export function stopSleep(beginning) {
    return async (dispatch) => {
        let finished = moment().toISOString()
        const request = await fetch("http://10.1.240.57:3000/api/v1/user/logSleep", {
            method: "POST",
            body: JSON.stringify({
                userID: "5bf10f675006944108b65010",
                from: beginning.toString(),
                to: finished.toString(),
                format: "iso",
                hourCount: "idk lol"
            })
        })
        const data = await request.json()
        dispatch({type: "SLEEP_MODE_END", payload: moment().toISOString()})
    }
}