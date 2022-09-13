import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxValue, required} from "../../utils/validators";
import {UniversalForm} from "../../common/FormControls/FormControls";
import style from "./../../common/FormControls/FormControls.module.css"


export type FormDataType={
    login:string
    password:string
    rememberMe:boolean
}
const maxLength=maxValue(30);
 export const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field formtype='input' validate={[required,maxLength]} name="login" component={UniversalForm}  placeholder={'Login'} />
            </div>
            <div>
                <Field formtype='input' validate={[required,maxLength]} name="password" component={UniversalForm} placeholder={'Password'} type={'password'}/>
            </div>
            <div>
                <Field name="rememberMe" component="input"  type="checkbox"/>remember me
            </div>
            {props.error&&<div className={style.error}>{props.error}</div>}
            <div>
                <button>login</button>
            </div>


        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export default LoginReduxForm