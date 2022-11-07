import { combineReducers } from "redux";
import { agentReducer } from "./Agent/reducers";




export const rootReducer=  combineReducers({
auth:agentReducer,

})




export type IRootState = ReturnType<typeof rootReducer>