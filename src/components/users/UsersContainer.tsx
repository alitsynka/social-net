import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {
    followUsersAC, followUserThunkCreator, getUsersThunkCreator, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgressAC, toggleIsFetchingAC,
    unFollowUsersAC, unFollowUserThunkCreator,
    UsersPageType, UsersStateType,
    UserType
} from "../../redux/UsersReducer";
import axios from "axios";
import {UserFunctionalComponent} from "./UserFunctionalComponent";
import {compose} from "redux";

type UsersCurrentlyType = {
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (user: UserType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}


export class UsersApiComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <UserFunctionalComponent users={this.props.users}
                                     follow={this.props.follow}
                                     unFollow={this.props.unFollow}
                                     currentPage={this.props.currentPage}
                                     totalUsersCount={this.props.totalUsersCount}
                                     pageSize={this.props.pageSize}
                                     onPageChanged={this.onPageChanged}
                                     isFetching={this.props.isFetching}
                                     followingProgress={this.props.followingProgress}
                                     toggleFollowingProgress={this.props.toggleFollowingProgress}
                                     unFollowUserThunk={this.props.unFollowUserThunk}
                                     followUserThunk={this.props.followUserThunk}
            />
        </>
    }
}


const mapStateToUsersProps = (state: UsersPageType) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress

} as const)

type MapStateToPropsType = ReturnType<typeof mapStateToUsersProps>
type MapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (user: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: number[] | boolean , userId:number) => void,
    getUsersThunk:(currentPage:number, pageSize:number) => void,
    unFollowUserThunk:(userId:number) => void,
    followUserThunk:(userId:number) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType
const mapDispatchToUsersProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followUsersAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowUsersAC(userId))
        },
        setUsers: (user: UserType[]) => {
            dispatch(setUsersAC(user))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
        toggleFollowingProgress: (isFetching: number[] | boolean, userId:number) => {
            dispatch(toggleFollowingProgressAC(isFetching, userId))
        },
        getUsersThunk:(currentPage:number, pageSize:number) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        unFollowUserThunk:(userId:number) => {
            dispatch(unFollowUserThunkCreator(userId))
        },
        followUserThunk:(userId:number) => {
            dispatch(followUserThunkCreator(userId))
        }
    }
}

export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, any, UsersPageType>(mapStateToUsersProps, mapDispatchToUsersProps)(UsersApiComponent)