import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    FallowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUserAC,
    UnFallowAC,
    UserType
} from "../../Redux/user-reduser";
import {AppStateType} from "../../Redux/redux-store";
import axios from "axios";
import {Users} from "./Users";


type mapStateToPropsType={
    users:Array<UserType>,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number
}
type mapDispatchToPropsType = {
    Fallow: (userID: string) => void
    UnFallow: (userID: string) => void
    setUser:(user:Array<UserType>)=>void
    setCurrentPage:(page:number)=>void
    setTotalUsersCount:(totalCount:number)=>void

}
export type UserPropsType= mapStateToPropsType & mapDispatchToPropsType
export class UsersAPIComponent extends React.Component<UserPropsType,any>{

    componentDidMount()
    {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
            this.props.setUser(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });

    }
    onClickHandler=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{
            this.props.setUser(response.data.items)
        });
    }
    render(){

        return <Users
            users={this.props.users}
            UnFallow={this.props.UnFallow}
            Fallow={this.props.Fallow}
            currentPage={this.props.currentPage}
            onClickHandler={this.onClickHandler}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}/>

    }
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        users: state.userPage.users,
        pageSize:state.userPage.pageSize,
        totalUsersCount:state.userPage.totalUsersCount,
        currentPage:state.userPage.currentPage
    }
}


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
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
