

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
    users: [] as Array<UserType>,
    pageSize:10 ,
    totalUsersCount:0,
    currentPage:4,
    isFetching:true
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
        case "SETCURRENTPAGE":{
            return {...state,currentPage: action.page}
        }
        case "SETTOTALCOUNT":{
            return {...state,totalUsersCount:action.totalCount}
        }
        case "TOGGLE_IS_FETCHING":{
            return {...state,isFetching: action.fetching}
        }

        default:
            return state
    }
}


type ActioneType = UnFallowACType | FallowACType | setUserACType|setCurrentPageType|setTotalUsersCountACType|isFetchingACType

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


type setCurrentPageType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC=(page:number)=>{
    return{
        type:"SETCURRENTPAGE",
        page
    }as const
}

type setTotalUsersCountACType=ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC=(totalCount:number)=>{
    return{
        type:"SETTOTALCOUNT",
        totalCount
    }as const
}

type isFetchingACType=ReturnType<typeof isFetchingAC>
export const isFetchingAC=(fetching:boolean)=>{
   return {
       type:"TOGGLE_IS_FETCHING",
       fetching
   }as const
}