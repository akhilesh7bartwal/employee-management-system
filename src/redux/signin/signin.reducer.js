import { signInActionType } from "./signin.type";

const INITIAL_STATE = {
    employee : {},
    token: "",
    admin:{}
}

export const signinReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case signInActionType.SHOW_EMPLOYEE:
            return{
                ...state,
                employee:action.payload
            }
        case signInActionType.SHOW_TOKEN:
            return{
                ...state,
                token:action.payload
            }
        case signInActionType.SHOW_ADMIN:
            return{
                ...state,
                admin:action.payload
            }
        default:
            return state;
    }
}
