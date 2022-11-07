import { ActionTypes, AuthenticateUserStart } from "./type";
import { takeLatest, call, put } from "redux-saga/effects";
import agent from "../../Api/agent";
import { authenticateFailed, authenticateUserSuccess } from "./actions";
import { IAccessLogin } from "../../Model/Dto/accessLogin";





function* handleAuthenticateUser(action: AuthenticateUserStart) {  
try {
        const res:IAccessLogin = yield call(agent.Auth.login,action.payload);
        const now = new Date();
        // set the time to be now + numberOfDays
        now.setTime(now.getTime() + ( 30 * 60 * 24 * 1000));
        const token:string|undefined = res.user.access_token;
        document.cookie = `agent=${token};     expires=${now.toUTCString()}; path=/`;
        const data = res

      
        if(!data){
            return 
        }
        yield put(authenticateUserSuccess(data)) 
    
    
    
} catch (error:any) {
    yield put(authenticateFailed(error.message)) 
    
}
}


//watchers
function* watchAuthenticateUser() {
	yield takeLatest(ActionTypes.AUHTENTICATE_USER_START, handleAuthenticateUser);
}

export const authSagas = [call(watchAuthenticateUser) ];