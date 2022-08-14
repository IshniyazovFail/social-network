import React from 'react';
import {connect} from "react-redux";
import {
    FollowThunkCreator,
    getUsersThunkCreator,
    toggleFollowingProgressAC,
    unFollowThunkCreator,
    UserType
} from "../../Redux/user-reduser";
import {AppStateType} from "../../Redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";


type mapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingOnProgress:Array<string>
}
type mapDispatchToPropsType = {
    toggleFollowingProgress:(fetching: boolean,userId:string)=>void,
    getUsersThunkCreator:(currentPage:number,pageSize:number)=>void,
    FollowThunkCreator: (userID: string) => void,
    unFollowThunkCreator: (userID: string) => void

}
export type UserPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }


    onClickHandler = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize)

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                {...this.props}

                onClickHandler={this.onClickHandler}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingOnProgress:state.userPage.followingOnProgress

    }
}


export const UsersContainer = connect(mapStateToProps, {
    FollowThunkCreator:FollowThunkCreator,
    toggleFollowingProgress:toggleFollowingProgressAC,
    getUsersThunkCreator:getUsersThunkCreator,
    unFollowThunkCreator:unFollowThunkCreator
})(UsersAPIComponent)
