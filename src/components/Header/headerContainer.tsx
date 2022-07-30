import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserDataAC} from "../../Redux/auth-reduser";
import {AppStateType} from "../../Redux/redux-store";
import {usersAPI} from "../../api/api";

export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType;

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
     usersAPI.getAuthMe().then(data => {

            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                this.props.setUserData(id, login, email)
            }
        });
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
    setUserData: (id: number, login: string, email: string) => void
}


export default connect(MapStateToProps, {setUserData:setUserDataAC}  )(HeaderContainer)