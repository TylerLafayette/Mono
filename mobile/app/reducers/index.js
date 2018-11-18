import { combineReducers } from "redux"

import bedtime from "./bedtimeReducer"
import track from "./trackReducer"
import history from "./historyReducer"

export default combineReducers({
    bedtime,
    track,
    history
})