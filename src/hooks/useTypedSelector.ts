import {TypedUseSelectorHook, useSelector} from "react-redux";
import { IRootState } from "../Redux/rootReducer";
export const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector