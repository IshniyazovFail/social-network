import React from 'react';
import {connect} from "react-redux";
import {
    FallowAC,
    isFetchingAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUserAC,
    UnFallowAC,
    UserType
} from "../../Redux/user-reduser";
import {AppStateType} from "../../Redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";


type mapStateToPropsType={
    users:Array<UserType>,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    isFetching:boolean
}
type mapDispatchToPropsType = {
    Fallow: (userID: string) => void
    UnFallow: (userID: string) => void
    setUser:(user:Array<UserType>)=>void
    setCurrentPage:(page:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
    setIsFetching:(fetching:boolean)=>void

}
export type UserPropsType= mapStateToPropsType & mapDispatchToPropsType
export class UsersAPIComponent extends React.Component<UserPropsType>{

    componentDidMount()
    {  this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
            this.props.setIsFetching(false)
            this.props.setUser(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });

    }
    onClickHandler=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{
            this.props.setIsFetching(false)
            this.props.setUser(response.data.items)
        });
    }
    render(){

        return<>
            {this.props.isFetching?<Preloader/>:null}
            <Users
            users={this.props.users}
            UnFallow={this.props.UnFallow}
            Fallow={this.props.Fallow}
            currentPage={this.props.currentPage}
            onClickHandler={this.onClickHandler}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}/>
        </>
    }
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        users: state.userPage.users,
        pageSize:state.userPage.pageSize,
        totalUsersCount:state.userPage.totalUsersCount,
        currentPage:state.userPage.currentPage,
        isFetching:state.userPage.isFetching
    }
}

/*
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        Fallow: (userID: string) => {
            dispatch(FallowAC(userID))
        },
        UnFallow: (userID: string) => {
            dispatch(UnFallowAC(userID))
        },
        setUser:(user:Array<UserType>)=>{
            dispatch(setUserAC(user))
        },
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsFetching:(fetching:boolean)=>{
            dispatch(isFetchingAC(fetching))
        }
    }
}*/


export const UsersContainer = connect(mapStateToProps, {
    Fallow: FallowAC,
    UnFallow: UnFallowAC,
    setUser:setUserAC,
    setCurrentPage:setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setIsFetching:isFetchingAC})(UsersAPIComponent)
