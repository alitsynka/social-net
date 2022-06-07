import React, {ChangeEvent, useState} from "react";
import s from './ProfileStatus.module.css';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(true)
    const [statusC, setStatusC] = useState(props.status)

    const activateEditMode = () => {
       setEditMode(false)
        setStatusC(props.status)
    }
    const deActivateEditMode = () => {
       setEditMode(true)
        props.updateUserStatus(props.status)
        setStatusC(statusC)
    }
    const onchangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        setStatusC(e.currentTarget.value)
    }

    return (
        <div className={s.Wrapper}>
            {
                editMode
                    ? <div>
                        <span onDoubleClick={activateEditMode}> {statusC}</span>
                    </div>
                    : <div>
                    <input value={statusC}
                           onChange={onchangeInput}
                           autoFocus
                           onBlur={deActivateEditMode}/>
                    </div>
            }
        </div>
    )
}