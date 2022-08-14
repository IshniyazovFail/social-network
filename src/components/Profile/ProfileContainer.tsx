import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, ProfileUserType} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

export type ProfileContainerType= mapStateToPropsType & mapDispatchToPropsType&RouteComponentProps<{ userId: string }>
class ProfileContainer extends React.Component<ProfileContainerType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfileThunkCreator(userId)
    }

    render(){
        if(!this.props.auth)return <Redirect to={"/login"}/>;
        return (
          <Profile {...this.props}/>
        )
    }

}
type mapStateToPropsType={
    profile:ProfileUserType,
    auth:boolean


}
type mapDispatchToPropsType={
    getProfileThunkCreator:(userID:string)=>void

}
const mapStateToProps=(state:AppStateType):mapStateToPropsType=>{
   return{
       profile:state.profilePage.profile,
       auth:state.auth.isAuth

   }
}


let WithUrlDataContainerComponent =withRouter(ProfileContainer)
export default connect(mapStateToProps,{getProfileThunkCreator:getProfileThunkCreator})(WithUrlDataContainerComponent)