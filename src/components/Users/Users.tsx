import React from 'react';
import style from "./Users.module.css";
import {UserType} from "../../Redux/user-reduser";
import photoUser from "../../assets/images/user2.png";
import {NavLink} from "react-router-dom";
import {UserPropsType} from "./UsersContainer";
import {usersAPI} from "../../api/api";


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
                            {el.followed ? <button disabled={props.followingOnProgress.some(id=>id===el.id)} onClick={() => {
                                props.toggleFollowingProgress(true,el.id)
                                    usersAPI.unfollow(el.id).then(data => {
                                            if(data.resultCode === 0){
                                                props.UnFallow(el.id)

                                            }
                                        props.toggleFollowingProgress(false,el.id)
                                        })
                                }


                            }>Unfollow</button> :
                                <button disabled={props.followingOnProgress.some(id=>id===el.id)} onClick={() =>{
                                    props.toggleFollowingProgress(true,el.id)
                                  usersAPI.follow(el.id).then(data => {
                                        if(data.resultCode === 0){
                                            props.Fallow(el.id)
                                        }
                                      props.toggleFollowingProgress(false,el.id)
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

