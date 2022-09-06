import React, {MouseEvent, KeyboardEvent, useState, useEffect} from 'react';
import {UserType} from "../Accordion/Accordion";
import s from './Select.module.css'


type SelectPropsValue = {
    value: string
    onChange: (value: string) => void
    items: Array<UserType>
    addCity?: () => void
}


export function Select(props: SelectPropsValue) {
    console.log('Go in select')
    const [edit, setEdit] = useState(false)
    const [hovered, setHovered] = useState(props.value)

    const hoveredItem = props.items?.find(i => i.name === hovered)

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

            for (let i = 0; i < props.items.length; i++) {

                if (props.items[i].name === hovered) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.name)
                        return
                    }
                }
            }
            if (!props.value) {
                props.onChange(props.items[0].name)
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setEdit(false)
        }
    }

    const callback = () => {
        props.addCity && props.addCity()
    }

    return (
        <div className={s.container} onKeyUp={onKeyUp} tabIndex={0}>
            <div onClick={divOnClickHandler} className={s.title}>{props.value}</div>
            {props.addCity && <button onClick={callback}>add City</button>}
            {edit && <ul>{props.items?.map(u => <li
                key={u.id}
                onClick={liOnClickHandler}
                onMouseEnter={() => setHovered(u.name)}
                className={s.item + ' ' + (hoveredItem === u ? s.selected : '')}>
                {u.name}</li>)}</ul>}

        </div>
    )
}








