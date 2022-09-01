import React, {useState} from 'react';


type RatingPropsType = RatingValueType

type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type SelfControlledRatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value:RatingValueType) => void
}


export function SelfControlledRating(props: SelfControlledRatingPropsType) {
    console.log('Select rendering')

    const [value, setValue] = useState<RatingValueType>(props.defaultValue? props.defaultValue : 1)

    return (
        <div>
            <Star selected={value > 0} value={value} setValue={() => {setValue(1); props.onChange(1)} }/>
            <Star selected={value > 1} value={value} setValue={() => {setValue(2); props.onChange(2)}}/>
            <Star selected={value > 2} value={value} setValue={() => {setValue(3); props.onChange(3)}}/>
            <Star selected={value > 3} value={value} setValue={() => {setValue(4); props.onChange(4)}}/>
            <Star selected={value > 4} value={value} setValue={() => {setValue(5); props.onChange(5)}}/>
        </div>
    )
}
type StarPropsType = {
    selected: boolean
    value: RatingValueType
    setValue: (value: RatingPropsType) => void
}

export function Star(props: StarPropsType) {



    return <span onClick={() => {props.setValue(props.value)}}>
        {props.selected ? <b>Star </b> : 'Star '}
    </span>


}






