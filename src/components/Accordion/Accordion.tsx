import React from "react";



export type UsersType = Array<UserType> | undefined
export type UserType = {
    id: any,
    name: string
}

type AccordionPropsType = {
    /**
     * Title
     */
    titleValue: string
    collapsed: boolean
    /**
     * a callback that invokes when any item clicked
     * @param value is value of clicked item
     */
    setCollapsed: (value: boolean) => void
    /**
     * choose color
     */
    color?: string
    /**
     * gaven array of users
     */
    users?: UsersType
    onClick?: (t: string) => void
}

function AccordionPresentational(props: AccordionPropsType) {
    debugger
    console.log('Accordion rendering')

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}
                            color={props.color}/>
            {!props.collapsed && <AccordionBody users={props.users} onClick={props.onClick}/>}
        </div>
    )
}


const Accordion = React.memo(AccordionPresentational)



type AccordionTitlePropsType = {
    title: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 style={{color: props.color ? props.color : 'black'}}
            onClick={() => props.setCollapsed(!props.collapsed)}>-- {props.title} --</h3>
    );
}

type AccordionBodyType = {
    users?: UsersType
    onClick?: (t: string) => void
}

function AccordionBody(props: AccordionBodyType) {
    console.log('AccordionBody rendering')
    return (<ul>
        {props.users?.map((t, i) => <li onClick={() => props.onClick?.(t.name)} key={i}>{t.name}</li>)}

    </ul>)


}

export default Accordion;
