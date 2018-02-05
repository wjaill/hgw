import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"

import reducer from "./reducer"

const store = createStore(reducer,applyMiddleware(thunk))   //applyMiddleware作用添加一个中间件

export default store
