import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'input',

}

export const UnControlledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return <><input onChange={onChangeHandler}/> -- {value}</>
}

export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={onClickHandler}>getValue</button>
        -- {value}</>
}


export const ControlledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {

        setValue(e.currentTarget.value)
    }

    return <input value={value} onChange={onChangeHandler}/>
}

export const ControlledCheckBox = () => {
    const [checked, setChecked] = useState(true)

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={checked} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>('3')


    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return <select value={value} onChange={onChangeHandler}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Kiev</option>
        <option value="3">Gomel</option>
    </select>
}
