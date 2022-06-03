import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {
    followUsersAC, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unFollowUsersAC,
    UsersPageType, UsersStateType,
    UserType
} from "../../redux/UsersReducer";
import axios from "axios";
import {UserFunctionalComponent} from "./UserFunctionalComponent";
import splint from './images/Spin.svg'
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/reduxState";


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
    isFetching:boolean
    toggleIsFetching:(isFetching:boolean) => void
}




export class UsersApiComponent extends React.Component<PropsType>{

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials:true
        })
            .then((res) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials:true
        })
            .then((res) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
            })
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
            />

        </>
    }}


const mapStateToUsersProps = (state: UsersPageType) => ({
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching

} as const)

type MapStateToPropsType = ReturnType<typeof mapStateToUsersProps>
type MapDispatchToPropsType =  {
    setCurrentPage:(currentPage:number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers:(user:UserType[]) => void
    setTotalUsersCount:(totalCount:number) => void
    toggleIsFetching:(isFetching:boolean) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType
const mapDispatchToUsersProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return{
        follow:(userId:number) => {
            dispatch(followUsersAC(userId))
        },
        unFollow:(userId:number) => {
            dispatch(unFollowUsersAC(userId))
        },
        setUsers:(user:UserType[]) => {
            dispatch(setUsersAC(user))
        },
        setCurrentPage:(currentPage:number) =>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalCount:number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching:(isFetching:boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, any, UsersPageType>(mapStateToUsersProps, mapDispatchToUsersProps)(UsersApiComponent)