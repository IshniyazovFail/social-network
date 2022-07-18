import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileUserType, setUserProfileAC} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type ProfileContainerType= mapStateToPropsType & mapDispatchToPropsType&RouteComponentProps<{ userId: string }>
class ProfileContainer extends React.Component<ProfileContainerType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response=>{

            this.props.setUserProfile(response.data)
        });
    }

    render(){
        return (
          <Profile {...this.props}/>
        )
    }

}
type mapStateToPropsType={
    profile:ProfileUserType,


}
type mapDispatchToPropsType={
    setUserProfile:(profile:ProfileUserType)=>void

}
const mapStateToProps=(state:AppStateType):mapStateToPropsType=>{
   return{
       profile:state.profilePage.profile,

   }
}


let WithUrlDataContainerComponent =withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUserProfile:setUserProfileAC})(WithUrlDataContainerComponent)