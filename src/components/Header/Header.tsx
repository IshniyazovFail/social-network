import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./headerContainer";


export const Header = (props: HeaderPropsType) => {
    const LogOutHandler = () => {
        props.logOut()
    }
    return (
        <header className={style.header}>
            <img
                src='https://mhcid.washington.edu/wp-content/uploads/2018/05/IntentionalFutures.png'/>
            {props.isAuth ? <div className={style.login}>{props.login}<span className={style.logout}><button
                    onClick={LogOutHandler}>Logout</button></span></div> :
                <div className={style.login}><NavLink to={'/login'}> Login</NavLink></div>}

        </header>)
}
