import React from 'react';
import s from './OnOff.module.css'


type OnOffPropsType = {
    setSwitchOnOff: (val: boolean) => void,
    switchOnOff: boolean
}


const OnOffPresentational = (props: OnOffPropsType) => {


    const onClassName = props.switchOnOff ? s.onBtn : ''
    const offClassName = !props.switchOnOff ? s.offBtn : ''
    const indicatorClassName = props.switchOnOff ? s.onBtn : s.offBtn


    return (
        <div className={s.container}>
            <button className={onClassName} onClick={() => {
                props.setSwitchOnOff(true)
            }}>on
            </button>
            <button className={offClassName} onClick={() => {
                props.setSwitchOnOff(false)
            }}>off
            </button>
            <button className={indicatorClassName + ' ' + s.indicator} disabled></button>
        </div>
    );
};


const OnOff = React.memo(OnOffPresentational)

export default OnOff;