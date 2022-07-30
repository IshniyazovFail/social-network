

export type UserType = {
    name: string
    id: string
    uniqueUrlName: string
    photos: {
        small:string,
        large:string
    }
    status: string
    followed: boolean
}


let initialState = {
    users: [] as Array<UserType>,
    pageSize:100 ,
    totalUsersCount:0,
    currentPage:1,
    isFetching:true,
    followingOnProgress:[] as Array<string>
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
        case "SET_CURRENT_PAGE":{
            return {...state,currentPage: action.page}
        }
        case "SET_TOTAL_COUNT":{
            return {...state,totalUsersCount:action.totalCount}
        }
        case "TOGGLE_IS_FETCHING":{
            return {...state,isFetching: action.isFetching}
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {...state,followingOnProgress: action.isFetching? [...state.followingOnProgress,action.userID]:state.followingOnProgress.filter(id=>id!==action.userID)}

        default:
            return state
    }
}


type ActioneType = UnFallowACType | FallowACType | setUserACType|setCurrentPageType|setTotalUsersCountACType|isFetchingACType|toggleFollowingProgressType

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
        type:"SET_CURRENT_PAGE",
        page
    }as const
}

type setTotalUsersCountACType=ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC=(totalCount:number)=>{
    return{
        type:"SET_TOTAL_COUNT",
        totalCount
    }as const
}

type isFetchingACType=ReturnType<typeof isFetchingAC>
export const isFetchingAC=(isFetching:boolean)=>{
   return {
       type:"TOGGLE_IS_FETCHING",
       isFetching
   }as const
}

type toggleFollowingProgressType=ReturnType<typeof toggleFollowingProgressAC>
export const toggleFollowingProgressAC=(isFetching:boolean,userID:string)=>{
    return{
        type:"TOGGLE_IS_FOLLOWING_PROGRESS",
        userID,
        isFetching
    }as const
}