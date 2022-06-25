

export type UserType = {
    id: string
    followed: boolean
    name: string
    status: string
    location: {
        country: string
        city: string
    }
    photoUrl: string
}


let initialState = {
    users: [] as Array<UserType>
}

export type initialStateType = typeof initialState

export const UserReduser = (state: initialStateType = initialState, action: ActioneType) => {
    switch (action.type) {
        case "FALLOW": {

            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        }
        case "UNFALLOW": {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        }
        case "SETUSER": {
            return {...state, users: action.users}
        }

        default:
            return state
    }
}


type ActioneType = UnFallowACType | FallowACType | setUserACType

type FallowACType = ReturnType<typeof FallowAC>
export const FallowAC = (userID: string) => {
    return {
        type: "FALLOW",
        userID
    } as const
}


type UnFallowACType = ReturnType<typeof UnFallowAC>
export const UnFallowAC = (userID: string) => {
    return {
        type: "UNFALLOW",
        userID
    } as const
}

type setUserACType = ReturnType<typeof setUserAC>
export const setUserAC = (users: Array<UserType>) => {
    return {
        type: "SETUSER",
        users
    } as const
}