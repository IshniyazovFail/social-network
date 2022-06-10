import React from "react";

import { AddNewMessageAC, AddPostAC, storeType} from "../../../Redux/store";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../storeContext";




export const MyPostsContainer = () => {

 /*   const onChangeHandler = (title:string) => {
        p.store.dispatch(AddNewMessageAC(title))
    }

    const onclickSubmitHandler = (message:string) => {
        p.store.dispatch(AddPostAC (message))
    }*/

    return (
        <StoreContext.Consumer>
            {
                (store)=>{


                    const onChangeHandler = (title:string) => {
                        store.dispatch(AddNewMessageAC(title))
                    }

                    const onclickSubmitHandler = (message:string) => {
                        store.dispatch(AddPostAC (message))
                    }
                    return(
                        <MyPosts addPost={onclickSubmitHandler} updateNewPosttext={onChangeHandler}  message={store.getState().profilePage.messageForNewPost} postData={store.getState().profilePage.postData}  />
                    )
                }


            }

        </StoreContext.Consumer>

    )
}