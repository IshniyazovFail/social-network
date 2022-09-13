import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthMeThunkCreator, logoutThunkCreator, setUserDataAC} from "../../Redux/auth-reduser";
import {AppStateType} from "../../Redux/redux-store";

export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType;

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthMeThunkCreator()
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    isAuth:boolean,
    login:null|string
}
const MapStateToProps = (state:AppStateType): MapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth,
        login:state.auth.login
    }
}
type MapDispatchToPropsType = {
    setUserData: (id: number, login: string, email: string,isAuth:boolean) => void,
    getAuthMeThunkCreator:()=>void,
    logOut:()=>void
}


export default connect(MapStateToProps, {setUserData:setUserDataAC,getAuthMeThunkCreator:getAuthMeThunkCreator,logOut:logoutThunkCreator}  )(HeaderContainer)