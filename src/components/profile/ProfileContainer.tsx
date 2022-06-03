import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType} from "../../redux/state";
import {ProfilePropsType} from "../../App";
import {followUsersAC} from "../../redux/UsersReducer";
import {SetUserProfileAC} from "../../redux/profileReducer";
import {Dispatch} from "redux";
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
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
                .then(res => {
                    // console.log(res.data)
                    this.props.setUserProfile(res.data)
                })
        }

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile`)
        //     .then(res => {
        //     this.props.setUsersProfile(res.data)
        //     })

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

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        setUserProfile: (profile: number) => {
            dispatch(SetUserProfileAC(profile))
        }
    }
}




const WithUrlDataContainerComponent = withRouter(ProfileApiContainer)



export  const ProfileContainer =  connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)