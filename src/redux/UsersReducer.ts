import {Action, Dispatch} from "redux";
import { usersApi} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./reduxState";

export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    location: {
        city: string
        country: string
    }
    photos: {
        small: string | null,
        large: string | null
    }
    uniqueUrlName: string
}
const initialState = {
    users: [] as UserType[],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followingProgress: [2, 3],
}

const spareUsers = {
    users: [
        {
            id: 1, fullName: "Veronika", status: "I`m a pet doctor", followed: true,
            location: {city: "Vitebck", country: "Belarus"}
        },

        {
            id: 2, fullName: "Angelina", status: "I`m a teacher", followed: false,
            location: {city: "Mir", country: "Belarus"}
        },

        {
            id: 3, fullName: "Zhanat", status: "I`m a programmer", followed: true,
            location: {city: "Dzerzhinsk", country: "Belarus"}
        }
    ]
}


export type UsersStateType = typeof initialState

type FollowType = {
    type: "FOLLOW"
    userId: number
}
type UnFollowType = {
    type: "UN-FOLLOW"
    userId: number
}
type SetUsersType = {
    type: "SET-USERS"
    users: UserType[]
}
type SetCurrentPageType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}
type setTotalUsersCountType = {
    type: "SET-TOTAL-USERS-COUNT"
    totalCount: number
}
type toggleIsFetchingType = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}
export type UsersPageType = {
    usersPage: UsersStateType
}
type FollowingProgressType = {
    type: "FOLLOWING-PROGRESS"
    isFetching: number[] | boolean
    userId: number
}
type ActionsType = FollowType | UnFollowType
    | SetUsersType | SetCurrentPageType
    | setTotalUsersCountType | toggleIsFetchingType
    | FollowingProgressType

export const UsersReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW": {
            const stateCopy = {
                ...state,
                users: state.users.map((u: any) => u.id === action.userId ? {...u, followed: true} : u)
            }
            return stateCopy
        }
        case "UN-FOLLOW": {
            const stateCopy = {
                ...state,
                users: state.users.map((u: any) => u.id === action.userId ? {...u, followed: false} : u)
            }
            return stateCopy
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state,   currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "FOLLOWING-PROGRESS": {
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter((id => id !== action.userId))
            }
        }
        default:
            return state
    }

}

export const followUsersAC = (userId: number): FollowType => {
    return {
        type: "FOLLOW",
        userId
    }
}
export const unFollowUsersAC = (userId: number): UnFollowType => {
    return {
        type: "UN-FOLLOW",
        userId
    }
}
export const setUsersAC = (users: UserType[]): SetUsersType => {
    return {
        type: "SET-USERS",
        users
    }
}
export const setCurrentPageAC = (currentPage: number): SetCurrentPageType => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    }
}
export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountType => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalCount
    }
}
export const toggleIsFetchingAC = (isFetching: boolean): toggleIsFetchingType => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    }
}
export const toggleFollowingProgressAC = (isFetching: number[] | boolean, userId: number): FollowingProgressType => {
    return {
        type: "FOLLOWING-PROGRESS",
        isFetching,
        userId
    }
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    usersApi.getUsers(currentPage, pageSize).then((res) => {
        dispatch(toggleIsFetchingAC(false))
        dispatch(setUsersAC(res.items))
        dispatch(setTotalUsersCountAC(res.totalCount))

    })
}

export const unFollowUserThunkCreator = (userId:number) => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    dispatch(toggleFollowingProgressAC(true, userId))
    usersApi.unFollow(userId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(unFollowUsersAC(userId))
            }
            dispatch(toggleFollowingProgressAC(false, userId))
        })
}
export const followUserThunkCreator = (userId:number) => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    dispatch(toggleFollowingProgressAC(true, userId))
    usersApi.follow(userId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(followUsersAC(userId))
            }
            dispatch(toggleFollowingProgressAC(false, userId))
        })
}

