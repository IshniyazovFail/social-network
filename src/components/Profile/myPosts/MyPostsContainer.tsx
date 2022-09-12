import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {AddPostAC, PostType} from "../../../Redux/profile-reducer";


type mapStateToProps={
    postData:Array<PostType>
}

type mapDispatchToPropsType ={
    AddPost:(message: string)=>void
}

export type myPostType =mapStateToProps &mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToProps=> {
    return {
        postData: state.profilePage.postData
    }
}


export const MyPostContainer = connect(mapStateToProps, {AddPost:AddPostAC})(MyPosts)