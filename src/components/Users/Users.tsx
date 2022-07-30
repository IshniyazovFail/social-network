import React from 'react';
import style from "./Users.module.css";
import {UserType} from "../../Redux/user-reduser";
import photoUser from "../../assets/images/user2.png";
import {NavLink} from "react-router-dom";
import {UserPropsType} from "./UsersContainer";
import axios from "axios";


type UsersType = {
    onClickHandler: (p: number) => void }& UserPropsType

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
                                <img alt='user' className={style.img} src={!el.photos.small ?  photoUser : el.photos.small }/>
                                </NavLink>
                            </div>
                            {el.followed ? <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{
                                            withCredentials:true,
                                    headers:{"API-KEY":'8412fccc-7db9-4f8c-90b3-198e2eb93072'}
                                        }).then(response => {
                                            if(response.data.resultCode === 0){
                                                props.UnFallow(el.id)
                                            }
                                        })
                                }


                            }>Unfollow</button> :
                                <button onClick={() =>{
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{},{
                                        withCredentials:true,
                                        headers:{"API-KEY":'8412fccc-7db9-4f8c-90b3-198e2eb93072'}
                                    }).then(response => {
                                        if(response.data.resultCode === 0){
                                            props.Fallow(el.id)
                                        }
                                    })
                                }

                                }>Follow</button>}

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

