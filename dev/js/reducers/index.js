import {combineReducers} from "redux";
import UserReducer from "./reducer-users";
import ActiveNewsReducer from "./reducer-active-news";

const allReducers = combineReducers({
    users: UserReducer,
    activeNews: ActiveNewsReducer
}) 

export default allReducers;  