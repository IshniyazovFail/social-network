let initialState:authReduserType= {
    id: null,
    login: null,
    email: null,
    isAuth:false
}

export type authReduserType = {
    id:number|null,
    login:string|null,
    email:string|null,
    isAuth:boolean
}

export const authReduser = (state: authReduserType = initialState, action: actionType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state,
                ...action.data, isAuth:true}
        }

        default:
            return state
    }
}



type actionType = setUserDataACType


type setUserDataACType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (id:number|null,login:string|null,email:string|null) => {
    return {
        type: "SET_USER_DATA",
        data: {
            id,
            login,
            email
        }
    } as const
}