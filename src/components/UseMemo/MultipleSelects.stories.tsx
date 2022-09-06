// Button.stories.ts|tsx

import React, {useCallback, useMemo, useState} from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Select} from "../Select/Select";

type CityType = {
    id: number,
    name: string,
    country: string,
    population: number
}

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'components/UseMemo',
    component: Select,
} as ComponentMeta<typeof Select>;


const SelectContainer = React.memo(Select)


export const SelectByPopulation: ComponentStory<typeof Select> = (args) => {

    const [cities, setCities] = useState<Array<CityType>>([{id: 1, name: 'Moscow', country: 'Russia', population: 10},
        {id: 2, name: 'Peter', country: 'Russia', population: 5},
        {id: 3, name: 'Samara', country: 'Russia', population: 1},
        {id: 4, name: 'Kyiv', country: 'Ukraine', population: 3},
        {id: 5, name: 'Odesa', country: 'Ukraine', population: 1},
        {id: 6, name: 'Kharkiv', country: 'Ukraine', population: 2},
        {id: 7, name: 'Minsk', country: 'Belarus', population: 2},
        {id: 8, name: 'Lviv', country: 'Ukraine', population: 1},
        {id: 9, name: 'Warsaw', country: 'Poland', population: 2},
        {id: 10, name: 'Novgorod', country: 'Russia', population: 1}])
    const [value, setValue] = useState(cities[0].name);
    const [counter, SetCounter] = useState(0)


    // with dependence

    const newCities = useMemo(() => {
        return cities.filter(c => c.population > 2)
    }, [cities]) // cached value

    const addCity = () => {
        const NewCities = [...cities, {
            id: Number(new Date().getTime()),
            name: 'Peter',
            country: 'Russia',
            population: 5
        },]
        console.log(NewCities[NewCities.length - 1].id)
        setCities(NewCities)
    }

    return <>
        <button onClick={() => SetCounter(counter + 1)}>count +1</button>
        {counter}
        <button onClick={addCity}>add City</button>
        <SelectContainer {...args}
                         value={value}
                         onChange={setValue}
                         items={newCities}
        />
    </>;
}


// SelectPopulation.args = {
//     items: country,
// }

export const SelectWithUseCallback: ComponentStory<typeof Select> = (args) => {
    const [cities, setCities] = useState<Array<CityType>>([{id: 1, name: 'Moscow', country: 'Russia', population: 10},
        {id: 2, name: 'Peter', country: 'Russia', population: 5},
        {id: 3, name: 'Samara', country: 'Russia', population: 1},
        {id: 4, name: 'Kyiv', country: 'Ukraine', population: 3},
        {id: 5, name: 'Odesa', country: 'Ukraine', population: 1},
        {id: 6, name: 'Kharkiv', country: 'Ukraine', population: 2},
        {id: 7, name: 'Minsk', country: 'Belarus', population: 2},
        {id: 8, name: 'Lviv', country: 'Ukraine', population: 1},
        {id: 9, name: 'Warsaw', country: 'Poland', population: 2},
        {id: 10, name: 'Novgorod', country: 'Russia', population: 1}])
    const [value, setValue] = useState(cities[0].name);
    const [counter, SetCounter] = useState(0)

    // with empty array of dependencies
    const newCities = useMemo(() => {
        return cities.filter(c => c.name[0] === 'M') // should have return
    }, [cities]) // cached value

    // useCallback
    const addCity = useCallback(() => { // doesn't have return
        const NewCities = [...cities, {
            id: Number(new Date().getTime()),
            name: 'Peter',
            country: 'Russia',
            population: 5
        },]
        setCities(NewCities)
    }, [cities]) // cached value

    return <>
        <button onClick={() => SetCounter(counter + 1)}>count +1</button>
        {counter}

        <SelectContainer {...args}
                         value={value}
                         onChange={setValue}
                         items={newCities}
                         addCity={addCity}
        />
    </>;
}


export const SelectByCountry: ComponentStory<typeof Select> = (args) => {
    const [cities, setCities] = useState<Array<CityType>>([{id: 1, name: 'Moscow', country: 'Russia', population: 10},
        {id: 2, name: 'Peter', country: 'Russia', population: 5},
        {id: 3, name: 'Samara', country: 'Russia', population: 1},
        {id: 4, name: 'Kyiv', country: 'Ukraine', population: 3},
        {id: 5, name: 'Odesa', country: 'Ukraine', population: 1},
        {id: 6, name: 'Kharkiv', country: 'Ukraine', population: 2},
        {id: 7, name: 'Minsk', country: 'Belarus', population: 2},
        {id: 8, name: 'Lviv', country: 'Ukraine', population: 1},
        {id: 9, name: 'Warsaw', country: 'Poland', population: 2},
        {id: 10, name: 'Novgorod', country: 'Russia', population: 1}])
    const [value, setValue] = useState(cities[0].name);
    const [counter, SetCounter] = useState(0)

    // without useMemo
    // React.memo doesn't save when we create new props array by filter
    const newCities = cities.filter(c => c.country === 'Russia') // uncached value


    return <>
        <button onClick={() => SetCounter(counter + 1)}>count +1</button>
        {counter}
        <SelectContainer {...args}
                         value={value}
                         onChange={setValue}
                         items={newCities}
        />
    </>;
}


export const SelectWithoutReactMemo: ComponentStory<typeof Select> = (args) => {
    const [cities, setCities] = useState<Array<CityType>>([{id: 1, name: 'Moscow', country: 'Russia', population: 10},
        {id: 2, name: 'Peter', country: 'Russia', population: 5},
        {id: 3, name: 'Samara', country: 'Russia', population: 1},
        {id: 4, name: 'Kyiv', country: 'Ukraine', population: 3},
        {id: 5, name: 'Odesa', country: 'Ukraine', population: 1},
        {id: 6, name: 'Kharkiv', country: 'Ukraine', population: 2},
        {id: 7, name: 'Minsk', country: 'Belarus', population: 2},
        {id: 8, name: 'Lviv', country: 'Ukraine', population: 1},
        {id: 9, name: 'Warsaw', country: 'Poland', population: 2},
        {id: 10, name: 'Novgorod', country: 'Russia', population: 1}])
    const [value, setValue] = useState(cities[0].name);
    const [counter, SetCounter] = useState(0)


    // Without React.Memo props enter Select every time even they don't changed

    return <>
        <button onClick={() => SetCounter(counter + 1)}>count +1</button>
        {counter}

        <Select {...args}
                value={value}
                onChange={setValue}
                items={cities}
        />
    </>;
}

export const SelectWithReactMemo: ComponentStory<typeof Select> = (args) => {
    const [cities, setCities] = useState<Array<CityType>>([{id: 1, name: 'Moscow', country: 'Russia', population: 10},
        {id: 2, name: 'Peter', country: 'Russia', population: 5},
        {id: 3, name: 'Samara', country: 'Russia', population: 1},
        {id: 4, name: 'Kyiv', country: 'Ukraine', population: 3},
        {id: 5, name: 'Odesa', country: 'Ukraine', population: 1},
        {id: 6, name: 'Kharkiv', country: 'Ukraine', population: 2},
        {id: 7, name: 'Minsk', country: 'Belarus', population: 2},
        {id: 8, name: 'Lviv', country: 'Ukraine', population: 1},
        {id: 9, name: 'Warsaw', country: 'Poland', population: 2},
        {id: 10, name: 'Novgorod', country: 'Russia', population: 1}])
    const [value, setValue] = useState(cities[0].name);
    const [counter, SetCounter] = useState(0)

    // With React.Memo we covered our Select into SelectContainer and if props don't change Select doesn't render again

    return <>
        <button onClick={() => SetCounter(counter + 1)}>count +1</button>
        {counter}

        <SelectContainer {...args}
                         value={value}
                         onChange={setValue}
                         items={cities}
        />
    </>;
}







