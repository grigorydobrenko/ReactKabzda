import './App.css';
import OnOff from "./components/OnOff/OnOFF";
import {SelfControlledRating} from "./components/SelfControlledRating/SelfControlledRating";
import {useState} from "react";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import SelfControlledOnOff from "./components/SelfControlledOnOff/SelfControlledOnOFF";
import SelfControlledAccordion from "./components/SelfControlledAccordion/SelfControlledAccordion";


//function declaration
function App(props: any) {
    // полезное что-то
    // обязана вернуть JSX
    console.log('App rendering')


    const [value, setValue] = useState<RatingValueType>(4)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [switchOnOff, setSwitchOnOff] = useState<boolean>(false)


    return (
        <div className={'App'}>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1

            <Accordion titleValue={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <SelfControlledAccordion titleValue={"Users"}/>

            Article 2

            <Rating value={value} onClick={setValue}/>
            <SelfControlledRating onChange={setValue}/>

            <OnOff setSwitchOnOff={setSwitchOnOff} switchOnOff={switchOnOff}/>
            <SelfControlledOnOff onChange={setSwitchOnOff}/> {switchOnOff.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <div>{props.title}</div>
}


export default App;
