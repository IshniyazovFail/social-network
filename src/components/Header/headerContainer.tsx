import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../../Redux/auth-reduser";
import {AppStateType} from "../../Redux/redux-store";

export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType;

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {

            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                this.props.setUserDataAC(id, login, email)
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
    setUserDataAC: (id: number, login: string, email: string) => void
}


export default connect(MapStateToProps, {setUserDataAC}  )(HeaderContainer)