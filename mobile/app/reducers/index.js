import { combineReducers } from "redux"

import bedtime from "./bedtimeReducer"
import track from "./trackReducer"

export default combineReducers({
    bedtime,
    track
})