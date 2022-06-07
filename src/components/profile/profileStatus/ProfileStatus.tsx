import React, {useState} from "react";
import s from './ProfileStatus.module.css';

type ProfileStatusType = {
    status: string
}

export const ProfileStatus = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(true)

    const activateEditMode = () => {
       setEditMode(false)
    }
    const deActivateEditMode = () => {
       setEditMode(true)
    }

    return (
        <div className={s.Wrapper}>
            {
                editMode
                    ? <div>
                        <span onDoubleClick={activateEditMode}> {props.status}</span>
                    </div>
                    : <div>
                    <input value={props.status} autoFocus onBlur={deActivateEditMode}/>
                    </div>
            }
        </div>
    )
}