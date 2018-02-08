import {combineReducers} from "redux"

import Find from "./reducers/Find"

import Car from "./reducers/Car"

const reducer = combineReducers({Find,Car})

export default reducer