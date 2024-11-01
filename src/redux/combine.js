import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";
import { countReducer } from "./count/count-reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    count: countReducer,
});
