import {v1} from "uuid";

export type PostType = {
    id: string,
    message: string,
    likeCounts: number
}

export type ProfileUserType={
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

let initialState = {
    messageForNewPost: '',
    postData: [
        {id: v1(), message: 'Hello, Im Fail', likeCounts: 12},
        {id: v1(), message: 'How are you?', likeCounts: 5},
        {id: v1(), message: 'Happy Hacking !!', likeCounts: 4},
        {id: v1(), message: 'Yo !', likeCounts: 9}] ,
    profile:{
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 1,
        photos: {
            small: '',
            large: '',
        }
    },
    status: ''
}

export type initialStateType = typeof initialState

type ActionsTypes = setUserProfileACType | AddPostACType | AddNewMessageACType

export const ProfileReducer = (state: initialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {id: v1(), message: action.postText, likeCounts: 0}
            return ({...state, messageForNewPost: "", postData: [newPost, ...state.postData]});
        case"ADD-NEW-MESSAGE":
            return {...state, messageForNewPost: action.NewText};
        case "SET_USER_PROFILE":
            return {...state,profile:action.profile}
        default:
            return state;
    }

}

type AddNewMessageACType = ReturnType<typeof AddNewMessageAC>
export const AddNewMessageAC = (text: string) => {
    return {type: "ADD-NEW-MESSAGE", NewText: text} as const
}
type AddPostACType = ReturnType<typeof AddPostAC>
export const AddPostAC = (text: string) => {
    return {type: "ADD-POST", postText: text} as const
}

type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile:ProfileUserType) => {
    return {
        type: "SET_USER_PROFILE",
        profile

    } as const
}

