import React from 'react';
import {connect} from "react-redux";
import {
    FallowAC,
    isFetchingAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUserAC, toggleFollowingProgressAC,
    UnFallowAC,
    UserType
} from "../../Redux/user-reduser";
import {AppStateType} from "../../Redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";


type mapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingOnProgress:Array<string>
}
type mapDispatchToPropsType = {
    Fallow: (userID: string) => void
    UnFallow: (userID: string) => void
    setUser: (user: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (fetching: boolean) => void
    toggleFollowingProgress:(fetching: boolean,userId:string)=>void

}
export type UserPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUser(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUser(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        });

    }

    onClickHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        usersAPI.getUser(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUser(data.items)
        });
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
    Fallow: FallowAC,
    UnFallow: UnFallowAC,
    setUser: setUserAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setIsFetching: isFetchingAC,
    toggleFollowingProgress:toggleFollowingProgressAC
})(UsersAPIComponent)
