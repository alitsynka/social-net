import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfilePropsType} from "../../App";
import {
    GetUserProfileThunkCreator,
    SetUserProfileAC,
    SetUserStatusThunkCreator,
    UpdateUserStatusThunkCreator
} from "../../redux/profileReducer";
import {withRouter} from "../WithRouter/WithRouter";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthredirectComponent";


type StateTypeForProfileContainer = {
    posts: Array<ProfilePropsType>
    newPostText: string
    profile: null
    setUsersProfile: (profile: any) => void
    login: boolean | string
}
type paramsType = {
    router:{
        params:{
            userId:number
        }
    }
}

export const ProfileApiContainer = (props: PropsType) => {

    let userId = props.router.params?.userId;
    // console.log(this.props)
    if (userId) {
        props.getUserProfile(userId)
        props.getUserStatus(userId)
    }

    return (
        <>
            <Profile profile={props.profile}
                     getUserStatus={props.getUserStatus}
                     updateUserStatus={props.updateUserStatus}
                     status={props.status}
            />
        </>
    )

}


const mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile,
       status:state.profilePage.status
    }
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchType = {
    setUserProfile: (profile: number) => void
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchType & paramsType

const mapDispatchToProps = (dispatch: any):MapDispatchType => {
    return {
        setUserProfile: (profile: number) => {
            dispatch(SetUserProfileAC(profile))
        },
        getUserProfile: (userId: number) => {
            dispatch(GetUserProfileThunkCreator(userId))
        } ,
        getUserStatus: (userId: number) => {
            dispatch(SetUserStatusThunkCreator(userId))
        },
        updateUserStatus: (status: string) => {
            dispatch(UpdateUserStatusThunkCreator(status))
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