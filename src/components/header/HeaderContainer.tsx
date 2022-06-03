import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersAC} from "../../redux/authReducer";
import {Dispatch} from "redux";


class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(res => {
                console.log(res.data)
                // debugger
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    this.props.setUsersData(id, email, login)
                }
            })
    }

    render() {
        return <Header login={this.props.login} />
    }
}


type AuthType = {
    auth: {
        userId: null,
        email: null,
        login: null,
    }
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = (state: AuthType) => ({
    login:state.auth.login
} as const)


type PropsType = MapStateToPropsType & mapDispatchToAuthPropsType

type mapDispatchToAuthPropsType = {
    setUsersData:(userId:number, email:string, login:string) => void
}
const mapDispatchToUsersProps = (dispatch:Dispatch):mapDispatchToAuthPropsType => {
    return {
        setUsersData: (userId: number, email: string, login: string) => {
            dispatch(setUsersAC(userId, email, login))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToUsersProps)(HeaderContainer)