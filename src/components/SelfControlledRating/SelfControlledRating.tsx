import React, {useState} from 'react';


type RatingPropsType = RatingValueType

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


export function SelfControlledRating(props: any) {
    console.log('Rating rendering')

    const [value, setValue] = useState<RatingValueType>(0)

    return (
        <div>
            <Star selected={value > 0} value={1} setValue={setValue}/>
            <Star selected={value > 1} value={2} setValue={setValue}/>
            <Star selected={value > 2} value={3} setValue={setValue}/>
            <Star selected={value > 3} value={4} setValue={setValue}/>
            <Star selected={value > 4} value={5} setValue={setValue}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    value: RatingPropsType
    setValue: (value: RatingPropsType) => void
}

export function Star(props: StarPropsType) {

    const onClickHandler = (val: RatingPropsType) => {
        props.setValue(val)
    }


    return <span onClick={() => onClickHandler(props.value)}>
        {props.selected ? <b>Star </b> : 'Star '}
    </span>


}






