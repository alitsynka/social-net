import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator, setUsersAC} from "../../redux/authReducer";
import {Dispatch} from "redux";
import {authAPi} from "../../api/api";


class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUsersData()
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
    getAuthUsersData:()=> void
}
const mapDispatchToUsersProps = (dispatch:any):mapDispatchToAuthPropsType => {
    return {
        setUsersData: (userId: number, email: string, login: string) => {
            dispatch(setUsersAC(userId, email, login))
        },
        getAuthUsersData:() => {
            dispatch(getAuthUserDataThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToUsersProps)(HeaderContainer)