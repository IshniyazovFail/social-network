import React from 'react';
import LoginReduxForm, {FormDataType} from "./LoginForm";
import {loginThunkCreator} from "../../Redux/auth-reduser";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";

const Login = (props:mapDispatchToPropsType&mapStateToPropsType) => {
    const onSubmit=(formData:FormDataType)=>{
       props.login(formData.login,formData.password,formData.rememberMe)
    }
   if(props.isAuth){
       return <Redirect to={"/profile"}/>
   }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

 type mapDispatchToPropsType={
     login:(email:string,password:string,rememberMe:boolean)=>void
 }
 type mapStateToPropsType={
     isAuth:boolean
 }
const mapStateToProps=(state:AppStateType):mapStateToPropsType=>{
    return {
        isAuth:state.auth.isAuth
    }
}
export default connect(mapStateToProps,{login:loginThunkCreator})(Login);