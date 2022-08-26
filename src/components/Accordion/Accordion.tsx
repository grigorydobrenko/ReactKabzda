import React from "react";

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
}

function Accordion(props: AccordionPropsType) {
    debugger
    console.log('Accordion rendering')

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}
                            color={props.color}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

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

function AccordionBody(props: any) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
        </ul>
    );
}

export default Accordion;
