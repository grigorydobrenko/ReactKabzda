import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


type modeType = 'digital' | 'analog'
type PropsType = {
    mode: modeType
}

export type ClockViewType = {
    date: Date
}


export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])



    switch (props.mode) {
        case "analog":
            return <AnalogClockView date={date}/>
        case "digital":
        default:
            return <DigitalClockView date={date}/>
    }
};



