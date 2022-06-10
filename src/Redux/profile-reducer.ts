import {ActionsTypes, PostType, profilePageType} from "./store";
import {v1} from "uuid";


let initialState ={
    messageForNewPost: '',
    postData: [
        {id: v1(), message: 'Hello, Im Fail', likeCounts: 12},
        {id: v1(), message: 'How are you?', likeCounts: 5},
        {id: v1(), message: 'Happy Hacking !!', likeCounts: 4},
        {id: v1(), message: 'Yo !', likeCounts: 9}]
}

export const ProfileReducer=(state:profilePageType=initialState,action:ActionsTypes)=>{
    switch (action.type){
        case "ADD-POST":
            const newPost: PostType = {id: v1(), message: action.postText, likeCounts: 0}
            state.postData.push(newPost)
            state.messageForNewPost = '';
            return state;
        case"ADD-NEW-MESSAGE":
            state.messageForNewPost = action.NewText;
            return state;
        default:  return state;
    }

}