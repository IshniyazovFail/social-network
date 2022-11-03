import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/headerContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./Redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";
import {initializeApp} from "./Redux/APP-reduser";

type AppPropsType=mapDispatchToPropsType&mapStateToPropsType
class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' component={DialogsContainer}/>
                        <Route path='/profile/:userId?' component={ProfileContainer}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/friends' component={Friends}/>
                        <Route path='/users' component={UsersContainer}/>
                        <Route path='/login' component={Login}/>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

type mapDispatchToPropsType={
    initializeApp:()=>void
}
type mapStateToPropsType={
    initialized:boolean
}
const MapStateToProps =(state:AppStateType):mapStateToPropsType=>{
    return {
        initialized:state.app.initialized
    }
}
export default connect(MapStateToProps,{initializeApp:initializeApp})(App);
