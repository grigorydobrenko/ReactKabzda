import React, { useState} from 'react';
import {UsersType} from "../Accordion/Accordion";
import s from './Select.module.css'


type SelectPropsValue = {
    value: string,
    onChange: (value: string) => void,
    users: UsersType
}


export function Select(props: SelectPropsValue) {
    const [edit, setEdit] = useState(false)
    const liOnClickHandler = (e: any) => {
        props.onChange(e.currentTarget.innerText)
        setEdit(!edit)
    }
    const divOnClickHandler = () => {
        setEdit(!edit)
    }
    return (
        <div className={s.container}>
            <div onClick={divOnClickHandler} className={s.title}>{props.value}</div>
            {edit && <ul>{props.users?.map(u => <li key={u.id} onClick={liOnClickHandler}
                                                   className={s.item}>{u.name}</li>)}</ul>}
        </div>
    )
}








