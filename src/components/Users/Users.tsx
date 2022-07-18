import React from 'react';
import style from "./Users.module.css";
import {UserType} from "../../Redux/user-reduser";
import photoUser from "../../assets/images/user2.png";
import {NavLink} from "react-router-dom";


type UsersType = {
    totalUsersCount: number
    pageSize: number
    onClickHandler: (p: number) => void
    currentPage: number
    UnFallow: (userID: string) => void
    Fallow: (userID: string) => void
    users: Array<UserType>
}
export const Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p, index) => {
                    return <span key={index} onClick={() => props.onClickHandler(p)}
                                 className={props.currentPage === p ? style.selectedPage : style.span}>{p}</span>
                }
            )
            }

            {props.users.map((el: UserType) => {
                return (
                    <div key={el.id} className={style.body}>
                        <div className={style.avatar}>
                            <div>
                                <NavLink to={'/profile/'+el.id}>
                                <img alt='user' className={style.img} src={photoUser}/>
                                </NavLink>
                            </div>
                            {el.followed ? <button onClick={() => props.UnFallow(el.id)}>Unfollow</button> :
                                <button onClick={() => props.Fallow(el.id)}>Follow</button>}

                        </div>
                        <div className={style.info}>
                            <div>
                                {el.name}
                            </div>
                            <div>
                                {el.status}
                                <div> {'el.location.city'}<br/>
                                    {'el.location.country'}
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

