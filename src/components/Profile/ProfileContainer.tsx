import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {PostType, ProfileUserType, setUserProfileAC} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";

export type ProfileContainerType= mapStateToPropsType & mapDispatchToPropsType
class ProfileContainer extends React.Component<ProfileContainerType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response=>{

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
    postData: Array<PostType>

}
type mapDispatchToPropsType={
    setUserProfile:(profile:ProfileUserType)=>void
}
const mapStateToProps=(state:AppStateType):mapStateToPropsType=>{
   return{
       postData:state.profilePage.postData,
       profile:state.profilePage.profile
   }


}

export default connect(mapStateToProps,{setUserProfile:setUserProfileAC})(ProfileContainer)