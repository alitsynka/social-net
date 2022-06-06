import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfilePropsType} from "../../App";
import {GetUserProfileThunkCreator, SetUserProfileAC} from "../../redux/profileReducer";
import {withRouter} from "../WithRouter/WithRouter";



type StateTypeForProfileContainer = {
    posts: Array<ProfilePropsType>
    newPostText: string
    profile:null
    setUsersProfile:(profile:any) => void
}

export class ProfileApiContainer extends React.Component<any>{

    componentDidMount() {

        let userId = this.props.router.params?.userId;
        // console.log(this.props)
        if(userId){
            this.props.getUserProfile(userId)
        }
    }

    render() {
        return(<>
                <Profile profile={this.props.profile}/>
            </>
        )
    }
}
const mapStateToProps = (state:any) => {
    return{
        profile:state.profilePage.profile
         }
    }

const mapDispatchToProps = (dispatch:any) => {
    return {
        setUserProfile: (profile: number) => {
            dispatch(SetUserProfileAC(profile))
        },
        getUserProfile:(userId:number) => {
            dispatch(GetUserProfileThunkCreator(userId))
        }
    }
}




const WithUrlDataContainerComponent = withRouter(ProfileApiContainer)



export  const ProfileContainer =  connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)