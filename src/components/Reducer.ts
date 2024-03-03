export const initialState = {
    userLogin : {},
    loading : true,
    error : null,
    success : false,
    message : ""
}

export const userLoginReducer = (state:any, action:any) => {
    switch(action.type){
        case 'LOGIN_START':
            console.log("action.payload", action.payload)
            return {...state, userLogin : action.payload, success: true, loading : false, message : "Login Success"}
        default:
            return state
    }
}