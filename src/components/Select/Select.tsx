import React, {MouseEvent, KeyboardEvent, useState, useEffect} from 'react';
import {UserType} from "../Accordion/Accordion";
import s from './Select.module.css'


type SelectPropsValue = {
    value: string,
    onChange: (value: string) => void,
    users: Array<UserType>
}


export function Select(props: SelectPropsValue) {
    const [edit, setEdit] = useState(false)
    const [hovered, setHovered] = useState(props.value)

    const hoveredItem = props.users?.find(i => i.name === hovered)

    const liOnClickHandler = (e: MouseEvent<HTMLLIElement>) => {
        props.onChange(e.currentTarget.innerText)
        setEdit(!edit)
    }
    const divOnClickHandler = () => {
        setEdit(!edit)
    }

    useEffect(() => {
        setHovered(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {

            for (let i = 0; i < props.users.length; i++) {

                if (props.users[i].name === hovered) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.users[i + 1] : props.users[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.name)
                        return
                    }
                }
            }
            if (!props.value) {
                props.onChange(props.users[0].name)
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setEdit(false)
        }
    }


    return (
        <div className={s.container} onKeyUp={onKeyUp} tabIndex={0}>
            <div onClick={divOnClickHandler} className={s.title}>{props.value}</div>
            {edit && <ul>{props.users?.map(u => <li
                key={u.id}
                onClick={liOnClickHandler}
                onMouseEnter={() => setHovered(u.name)}
                className={s.item + ' ' + (hoveredItem === u ? s.selected : '')}>
                {u.name}</li>)}</ul>}
        </div>
    )
}








