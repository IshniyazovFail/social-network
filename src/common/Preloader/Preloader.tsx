import React from 'react';
import style from "../../components/Users/Users.module.css";
import preloader from "../../assets/images/tail-spin.svg";

export const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img alt='preloader' src={preloader}/>
        </div>
    );
};

