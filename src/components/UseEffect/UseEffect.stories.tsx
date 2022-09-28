// Button.stories.ts|tsx

import React, {useEffect, useState} from 'react';



export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'components/UseEffect',

}

export const SetTimeOutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('settimeout')

    useEffect(() => {
        let date = new Date().toLocaleTimeString()
        setCounter(+date)
        setInterval(() => {setCounter((state) => state + 1)} , 1000)
    }, [])

    return <>
        Counter: {counter}
    </>
}











