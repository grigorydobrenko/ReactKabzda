import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOFF";
import SelfControlledAccordion from "./components/SelfControlledAccordion/Accordion";
import {SelfControlledRating} from "./components/SelfControlledRating/Rating";


//function declaration
function App(props: any) {
    // полезное что-то
    // обязана вернуть JSX
    console.log('App rendering')
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1

          {/*  <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>*/}
            <SelfControlledAccordion titleValue={"Users"} />
            <SelfControlledAccordion titleValue={"Users"} />
            Article 2
            <SelfControlledRating />
            <SelfControlledRating />
           {/* <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

            <OnOff />
            <OnOff />
            <OnOff />

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
