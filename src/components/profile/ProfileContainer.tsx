import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfilePropsType} from "../../App";
import {GetUserProfileThunkCreator, SetUserProfileAC} from "../../redux/profileReducer";
import {withRouter} from "../WithRouter/WithRouter";
import {useNavigate} from "react-router-dom";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthredirectComponent";
import {compose} from "redux";


type StateTypeForProfileContainer = {
    posts: Array<ProfilePropsType>
    newPostText: string
    profile: null
    setUsersProfile: (profile: any) => void
    login: boolean | string
}

export const ProfileApiContainer = (props: any) => {

    let userId = props.router.params?.userId;
    // console.log(this.props)
    if (userId) {
        props.getUserProfile(userId)
    }

    return (
        <>
            <Profile profile={props.profile}/>
        </>
    )

}


const mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile,
        login:state.login
    }
}
const mapStateToPropsForRedirect = (state: any) => {
    return {
        login:state.login
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        setUserProfile: (profile: number) => {
            dispatch(SetUserProfileAC(profile))
        },
        getUserProfile: (userId: number) => {
            dispatch(GetUserProfileThunkCreator(userId))
        }
    }
}

const AuthRedirectComponent = WithAuthRedirectComponent(ProfileApiContainer)

// compose(
//     WithAuthRedirectComponent,
//     connect(mapStateToProps, mapDispatchToProps),
//     withRouter
//    )(ProfileApiContainer)

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)


export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)