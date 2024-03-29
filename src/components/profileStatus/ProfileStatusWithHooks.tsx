import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusWithHooksType={
    updateStatus:(title:string)=>void,
    status:string
}
const ProfileStatusWithHooks = (props:ProfileStatusWithHooksType) => {

    let[editMode,setEditMode]=useState(false)
    let[status,setStatus]=useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode=()=>{
        setEditMode(true)
    }
    const deactivateEditMode=()=>{
        setEditMode(false)
        props.updateStatus(status)
    }

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {editMode ?
                <div><input onChange={onChangeHandler} autoFocus onBlur={deactivateEditMode} value={status}/>
                </div> :
                <div><span onDoubleClick={activateEditMode}>{status||'---'}</span></div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;