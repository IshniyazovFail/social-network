import React from 'react';
import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form/lib/Field";
import style from "./FormControls.module.css"


type FormPropsType= {
    input:WrappedFieldInputProps,
    meta:WrappedFieldMetaProps,
    placeholder:string,
    formtype:string
}

export const UniversalForm =({input,meta,...props}:FormPropsType) => {
    let ErrorMeta=meta.touched&&meta.error
    return (
        <div>
            {props.formtype==='input'? <input {...input} {...props} className={ErrorMeta?style.textError:""}/>:
                <textarea {...input} {...props} className={ErrorMeta?style.textError:""}/>}
            {ErrorMeta&&<div className={style.error}>{meta.error}</div>}
        </div>
    );
};
