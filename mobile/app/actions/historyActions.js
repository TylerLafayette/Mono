export function fetchHistory() {
    return async (dispatch) => {
        const request = await fetch("http://10.1.240.57:3000/api/v1/user/logs")
        const json = await request.json()
        dispatch({type: "HISTORY_FETCH_COMPLETE", payload: json})
    }
}