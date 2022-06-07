import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";



export const WithAuthRedirectComponent = (Component:any) =>{
    const RedirectComponent = (props:any) =>{
        let navigate = useNavigate();
        useEffect(() => {
            if (props.login === false) {
                return navigate("/login");
            }
        }, [props.login]);
        return<Component {...props}/>
    }
    return RedirectComponent

}