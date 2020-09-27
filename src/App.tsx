import React, {useState} from 'react';
import './App.css';
import {Accordion, AccordionPropsType} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/onOff/UncontrolledOnOff";
import {OnOff2} from "./components/onOff2/OnOff2";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";


function App() {
  let [ratingValue,setRatingValue]=useState<RatingValueType>(0)
  let [collapsed,setCollapsed]=useState<boolean>(false)
  let [on,setON]=useState<boolean>(true)
  return (
      <div className="App">
      {/*  <PageTitle title={"This is App component"}/>
        <UncontrolledAccordion titleValue={"Menu"} />
        <UncontrolledAccordion titleValue={"User"} />
         <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        <UncontrolledOnOff onChange={setON} />{on.toString()}*/}
        <OnOff2 on={on} onClick={setON}/>

        {/*<Select titleValue={"MenuuBlya"} collapsed={collapsed} onClick={setCollapsed}/>
        <UncontrolledRating />
        <Rating value={ratingValue} onClick={setRatingValue}/>*/}


      </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <div><h1>{props.title}</h1></div>
}

export default App;
