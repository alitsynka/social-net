const initialState:UsersStateType = {
    users:[],
    pageSize:5,
    totalUsersCount:20,
    currentPage:2,
    isFetching:false
}

const spareUsers =  {
    users:[
        {id:1, fullName:"Veronika", status:"I`m a pet doctor", followed:true,
            location:{city:"Vitebck", country:"Belarus"}},

        {id:2, fullName:"Angelina", status:"I`m a teacher", followed:false,
            location:{city:"Mir", country:"Belarus"}},

        {id:3, fullName:"Zhanat", status:"I`m a programmer", followed:true,
            location:{city:"Dzerzhinsk", country:"Belarus"}}
    ]
}


export type UserType = {
    id:number
    fullName:string
    status:string
    followed:boolean
    location:{
        city:string
        country:string
    }
}

export type UsersStateType = {
    currentPage:number
    pageSize:number
    totalUsersCount:number
    users:UserType[]
    isFetching:boolean
}

type FollowType = {
    type:"FOLLOW"
    userId:number
}
type UnFollowType = {
    type:"UN-FOLLOW"
    userId:number
}
type SetUsersType = {
    type:"SET-USERS"
    users:UserType[]
}
type SetCurrentPageType = {
    type:"SET-CURRENT-PAGE"
    currentPage:number
}
type setTotalUsersCountType = {
    type:"SET-TOTAL-USERS-COUNT"
    totalCount:number
}
type toggleIsFetchingType = {
    type:"TOGGLE-IS-FETCHING"
    isFetching:boolean
}
export type UsersPageType = {
    usersPage:UsersStateType

}
type ActionsType = FollowType | UnFollowType
    | SetUsersType |SetCurrentPageType
    | setTotalUsersCountType | toggleIsFetchingType

export const UsersReducer = (state:UsersStateType = initialState, action:ActionsType) => {
   switch (action.type){
       case "FOLLOW":{

           const stateCopy = {
               ...state,
               users:state.users.map((u:any) => u.id === action.userId ? {...u, followed:true} : u)}
           return stateCopy
       }
       case "UN-FOLLOW":{
           const stateCopy = {
               ...state,
               users:state.users.map((u:any) => u.id === action.userId ? {...u, followed:false} : u)}
           return stateCopy
       }
       case "SET-USERS":{
           const stateCopy = {
               ...state, users:action.users
           }
           return stateCopy
       }
       case "SET-CURRENT-PAGE":{
           return {...state, currentPage:action.currentPage }
       }
       case "SET-TOTAL-USERS-COUNT":{
           return {...state, totalUsersCount:action.totalCount }
       }
       case "TOGGLE-IS-FETCHING":{
           return {...state, isFetching:action.isFetching}
       }
       default:return state
   }

}

export const followUsersAC = (userId:number):FollowType => {
    return {
        type:"FOLLOW",
        userId
    }
}
export const unFollowUsersAC = (userId:number):UnFollowType => {
    return {
        type:"UN-FOLLOW",
        userId
    }
}
export const setUsersAC = (users:UserType[]):SetUsersType => {
    return {
        type:"SET-USERS",
        users
    }
}
export const setCurrentPageAC = (currentPage:number):SetCurrentPageType => {
    return {
        type:"SET-CURRENT-PAGE",
        currentPage
    }
}
export const setTotalUsersCountAC = (totalCount:number):setTotalUsersCountType => {
    return {
        type:"SET-TOTAL-USERS-COUNT",
        totalCount
    }
}
export const toggleIsFetchingAC = (isFetching:boolean):toggleIsFetchingType => {
    return {
        type:"TOGGLE-IS-FETCHING",
        isFetching
    }
}


