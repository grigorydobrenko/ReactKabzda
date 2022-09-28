import React from "react";
import {ClockViewType} from "./Clock";

const getTwoDigitsString = (number: number) => {
    return (number < 10) ? '0' + number : number
}

const stylezz = {
    fontSize: "84px",
    maxWidth: "400px",
    margin: "0 auto",
    color: 'gold',
    textShadow: '2px 2px #ff0000'
}

export const DigitalClockView: React.FC<ClockViewType> = ({date}) => {
    return (
        <div style={stylezz}>
            <span>{getTwoDigitsString(date.getHours())}</span>:
            <span>{getTwoDigitsString(date.getMinutes())}</span>:
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    );
}