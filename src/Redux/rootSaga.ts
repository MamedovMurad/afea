
import { all } from "redux-saga/effects";
import { authSagas } from "./Agent/sagas";



function* rootSaga() {
	yield all([
        ...authSagas,

    ])
}

export default rootSaga;
