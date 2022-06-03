import axios from "axios";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const ProfileInfoContainer = (props: any) => {

    let userId = props.router.params?.userId;
    console.log(props)
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(res => {
            console.log(res.data)
            props.setUserProfile(res.data)
        })

    return (
        <ProfileInfo/>
    )

}