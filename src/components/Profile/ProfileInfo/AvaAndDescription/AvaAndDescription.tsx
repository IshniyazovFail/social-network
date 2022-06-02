import React from "react";
import s from './AvaAndDescription.module.css'

export const AvaAndDescription =()=>{
    return(
        <div>
            <img className={s.img} src ='https://expari.com/uploads/profile/cc838/689a1/5e60f/649644dbd7cea598b_X_SMALL.jpg'/>
                <div className={s.Description}>
                    name:  Ihniyazov Fail<br/>
                    city:  Kazan  <br/>
                </div>
        </div>
    )
}