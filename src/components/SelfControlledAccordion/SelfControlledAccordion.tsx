import React, {useState} from "react";

type SelfControlledAccordionPropsType = {
    titleValue: string
}

function SelfControlledAccordionPresentational(props: SelfControlledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const toggleAccordionBody = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} toggleAccordionBody={toggleAccordionBody}/>

            {!collapsed && <AccordionBody/>}
        </div>
    )
}


const SelfControlledAccordion = React.memo(SelfControlledAccordionPresentational)

type AccordionTitlePropsType = {
    title: string
    toggleAccordionBody: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => {
        props.toggleAccordionBody()
    }
    return (
        <h3 onClick={onClickHandler}>-- {props.title} --</h3>
    );
}

function AccordionBody(props: any) {

    return (
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
        </ul>
    );
}

export default SelfControlledAccordion;
