
import { IAccessLogin } from "../../Model/Dto/accessLogin";
import { Action, ActionTypes,  AuthStartPayload } from "./type";

export const authenticateUserStart = (payload: AuthStartPayload): Action => ({
	type: ActionTypes.AUHTENTICATE_USER_START,
	payload
});

export const authenticateUserSuccess = (payload:IAccessLogin): Action => ({
	type: ActionTypes.AUHTENTICATE_USER_SUCCESS,
    payload
});
export const authenticateFailed = (payload:any): Action => ({
	type: ActionTypes.AUHTENTICATE_USER_FAILURE,
    payload
});
