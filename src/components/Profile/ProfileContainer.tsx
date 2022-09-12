import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatusThunkCreator,
    getProfileThunkCreator,
    ProfileUserType,
    updateProfileStatusThunkCreator
} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type ProfileContainerType= mapStateToPropsType & mapDispatchToPropsType&RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<ProfileContainerType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '24478'
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render(){
        return (
          <Profile {...this.props} status={this.props.status} />
        )
    }

}
type mapStateToPropsType={
    profile:ProfileUserType,
    status:string
}
type mapDispatchToPropsType={
    getProfile:(userID:string)=>void,
    getProfileStatus:(userID:string)=>void,
    updateProfileStatus:(status:string)=>void

}
const mapStateToProps=(state:AppStateType):mapStateToPropsType=>{
   return{
       profile:state.profilePage.profile,
        status:state.profilePage.status
   }
}



/*let WithUrlDataContainerComponent =withRouter(ProfileContainer)*/
/*
WithAuthRedirect(connect(mapStateToProps,{getProfileThunkCreator:getProfileThunkCreator})(WithUrlDataContainerComponent))*/
//compose для упорядочивания наших контейнеров
export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps,{getProfile:getProfileThunkCreator,getProfileStatus:getProfileStatusThunkCreator,updateProfileStatus:updateProfileStatusThunkCreator}),
    withRouter
)(ProfileContainer)

