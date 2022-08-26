import React, {useState} from 'react';
import s from './SelfControlledOnOff.module.css'


type OnOffPropsType = {
    onChange: (val: boolean) => void
    defaultOn?: boolean
}

const SelfControlledOnOff = (props: OnOffPropsType) => {


    const [on, setON] = useState<boolean>(props.defaultOn ? props.defaultOn : false)


    const onClassName = on ? s.onBtn : ''
    const offClassName = !on ? s.offBtn : ''
    const indicatorClassName = on ? s.onBtn : s.offBtn

    const onClicked = () => {
        setON(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setON(false)
        props.onChange(false)
    }

    return (
        <div className={s.container}>
            <button className={onClassName} onClick={onClicked}>on
            </button>
            <button className={offClassName} onClick={offClicked}>off
            </button>
            <button className={indicatorClassName + ' ' + s.indicator} disabled></button>
        </div>
    );
};

export default SelfControlledOnOff;