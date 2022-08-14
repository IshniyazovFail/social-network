import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {AddNewMessageAC, AddPostAC, PostType} from "../../../Redux/profile-reducer";


type mapStateToProps={
    message: string
    postData:Array<PostType>
}

type mapDispatchToPropsType ={
    AddNewMessage:(title: string)=>void
    AddPost:(message: string)=>void
}

export type myPostType =mapStateToProps &mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToProps=> {
    return {
        message: state.profilePage.messageForNewPost,
        postData: state.profilePage.postData
    }
}


export const MyPostContainer = connect(mapStateToProps, {AddNewMessage:AddNewMessageAC,AddPost:AddPostAC})(MyPosts)