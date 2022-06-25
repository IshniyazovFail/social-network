import React from "react";


import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {AddNewMessageAC, AddPostAC, PostType} from "../../../Redux/profile-reducer";


/*export const MyPostsContainer = () => {*/

/*   const onChangeHandler = (title:string) => {
       p.store.dispatch(AddNewMessageAC(title))
   }

   const onclickSubmitHandler = (message:string) => {
       p.store.dispatch(AddPostAC (message))
   }*/

/*return (
    <StoreContext.Consumer>
        {
            (store) => {


                const onChangeHandler = (title: string) => {
                    store.dispatch(AddNewMessageAC(title))
                }

                const onclickSubmitHandler = (message: string) => {
                    store.dispatch(AddPostAC(message))
                }
                return (
                    <MyPosts addPost={onclickSubmitHandler} updateNewPosttext={onChangeHandler}
                             message={store.getState().profilePage.messageForNewPost}
                             postData={store.getState().profilePage.postData}/>
                )
            }


        }

    </StoreContext.Consumer>

)
}*/

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


const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return{
        AddNewMessage:(title: string) => {
            dispatch(AddNewMessageAC(title))
        },
        AddPost:(message: string) => {
            dispatch(AddPostAC(message))
        },
    }

}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)