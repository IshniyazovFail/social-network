import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type FormDataType={
    login:string
    password:string
    rememberme:boolean
}
 export const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component="input"  placeholder={'Login'} />
            </div>
            <div>
                <Field name="password" component="input"  placeholder={'Password'}/>
            </div>
            <div>
                <Field name="rememberme" component="input"  type="checkbox"/>remember me
            </div>
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