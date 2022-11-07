
import { Action, ActionTypes, AuthReducerState } from "./type";

export const initialState: AuthReducerState = {
    status:true,
   loading: false,
    error:null,
    user:{id:0, access_token:''}
	
};

export const agentReducer = (state=initialState,action:Action):AuthReducerState=>{
    switch (action.type) {
        case ActionTypes.AUHTENTICATE_USER_START:
          return {
              ...state,
              loading:true
          }
          case ActionTypes.AUHTENTICATE_USER_SUCCESS:
			return {
				...state,
          
				loading: false,
                user:action.payload.user,
                status:action.payload.status
                
			};

		case ActionTypes.AUHTENTICATE_USER_FAILURE:
			return {
				...state,
                error:{message:action.payload},
				loading: false,
                
			};
        default:
            return state;
    }
}