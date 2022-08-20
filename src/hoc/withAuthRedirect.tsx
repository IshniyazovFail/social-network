import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";

type mapStateToPropsType={
    isAuth:boolean
}
const mapStateToProps=(state:AppStateType):mapStateToPropsType=>{
    return{
        isAuth:state.auth.isAuth
    }
}

 export function WithAuthRedirect <T>(Component:ComponentType<T>){
  const RedirectComponent=(props:mapStateToPropsType)=>{
      let{isAuth,...restProps}=props
      if(!props.isAuth)return <Redirect to={"/login"}/>

      return   <Component {...restProps as T}/>
  }



  let ConnectedRedirectComponent=connect(mapStateToProps)(RedirectComponent)
      return ConnectedRedirectComponent

};

