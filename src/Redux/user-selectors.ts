import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersSelector=(state:AppStateType)=>state.userPage.users
export const getUsersSelect=createSelector(getUsersSelector,users=>users)

export const getTotalUsersCountSelector=(state:AppStateType)=>state.userPage.totalUsersCount
export const getTotalUsersCount=createSelector(getTotalUsersCountSelector,totalUsersCount=>totalUsersCount)

export const getCurrentPageSelector=(state:AppStateType)=>state.userPage.currentPage
export const getCurrentPage=createSelector(getCurrentPageSelector,currentPage=>currentPage)

export const getIsFetchingSelector=(state:AppStateType)=>state.userPage.isFetching
export const getIsFetching=createSelector(getIsFetchingSelector,isFetching=>isFetching)

export const getFollowingOnProgressSelector=(state:AppStateType)=>state.userPage.followingOnProgress
export const getFollowingOnProgress=createSelector(getFollowingOnProgressSelector,followingOnProgress=>followingOnProgress)

export const getPageSizeSelector=(state:AppStateType)=>state.userPage.pageSize
export const getPageSize=createSelector(getPageSizeSelector,pageSize=>pageSize)
