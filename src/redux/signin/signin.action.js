import { signInActionType } from "./signin.type";

export const displayEmployee = (employee) =>({
    type: signInActionType.SHOW_EMPLOYEE,
    payload:employee
});

export const setToken = (token) =>{
    return{
        type: signInActionType.SHOW_TOKEN, 
        payload: token
    }
};

export const setAdmin = (admin) =>{
    return{
        type: signInActionType.SHOW_ADMIN,
        payload: admin
    }
}