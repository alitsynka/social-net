import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY":"3ba86e10-18c1-48e9-9acb-2879020ab27c"
    }
})
export const usersApi = {
    getUsers(currentPage:number, pageSize:number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userid:number){
        return instance.post(`follow/${userid}`)
    },
    unFollow(userid:number){
        return instance.delete(`follow/${userid}`)
    },
    getProfile(userId:number){
        return instance.get(`profile/` + userId)
    }
}

export const authAPi = {
    me() {
        return instance.get(`auth/me` )
    }
}

export const profileApi = {
    getProfile(userId:number){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId:number) {
        return instance.get(`profile/status/` + userId)

    },
    updateStatus(status:string) {
        return instance.put(`profile/status/`, {status:status});

    }
}